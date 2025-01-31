import FormData from 'form-data'
import Mailgun from 'mailgun.js'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, email, message, to } = body
    const config = useRuntimeConfig()

    // Initialize Mailgun
    const mailgun = new Mailgun(FormData)
    const mg = mailgun.client({
      username: 'api',
      key: config.mailgun.apiKey
    })

    // Send email
    const response = await mg.messages.create(config.mailgun.domain, {
      from: config.mailgun.from,
      to: [to],
      subject: `Portfolio Contact: Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    return { success: true, id: response.id }
  } catch (error) {
    console.error('Email send error:', error)
    throw createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : 'Failed to send email'
    })
  }
})
