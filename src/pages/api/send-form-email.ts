// pages/api/send-form-email.ts
import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).send({ error: "Method not allowed" })
  }

  const formData = req.body

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `"Valhalla Girls Application" <${process.env.EMAIL_USER}>`,
    to: "howl@hardcodepunk.be",
    subject: "New Application Submission",
    html: `
      <h2>New Application Submission</h2>
      ${Object.entries(formData)
        .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
        .join("")}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).send({ message: "Email sent successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).send({ error: "Failed to send email" })
  }
}
