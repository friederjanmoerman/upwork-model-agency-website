import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).send({ error: "Method not allowed" })
  }

  const formData = req.body

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
      from: `"New Form Submission" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: "📩 New Form Submission from Website",
      html: `
        <h2>Form Submission Details:</h2>
        ${Object.entries(formData)
          .map(([key, value]) => `<p><strong>${key}:</strong> ${value || "N/A"}</p>`)
          .join("")}
      `,
    })

    res.status(200).send({ message: "Email sent successfully!" })
  } catch (error: any) {
    console.error("Error sending email:", error)
    res.status(500).send({ error: "Error sending email", details: error.message })
  }
}
