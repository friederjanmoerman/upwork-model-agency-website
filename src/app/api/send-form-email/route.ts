// src/app/api/send-form-email/route.ts

import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  const formData = await request.json()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Valhalla Girls Application" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: "New submission",
      html: `
        <h2>Form Details:</h2>
        ${Object.entries(formData)
          .map(([key, value]) => `<p><strong>${key}:</strong> ${value || "N/A"}</p>`)
          .join("")}
      `,
    })

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error"
    console.error(error)
    return NextResponse.json({ error: "Failed to send email", details: message }, { status: 500 })
  }
}

console.log("SMTP_HOST:", process.env.SMTP_HOST)
console.log("SMTP_PORT:", process.env.SMTP_PORT)
