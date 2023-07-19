import { NextApiRequest, NextApiResponse } from 'next'
import FormData from 'form-data'
import Mailgun from 'mailgun.js'

const API_KEY = process.env.MAILGUN_API_KEY!
const DOMAIN = process.env.MAILGUN_DOMAIN!

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mailgun = new Mailgun(FormData)
  const client = mailgun.client({ username: 'api', key: API_KEY })

  const { name, email, message } = req.body

  const messageData = {
    from: 'Contact Form <contact@lucascoutodev.com>',
    to: 'lucascoutodev+website@gmail.com',
    subject: 'New Contact Request',
    text: `
    Hello,
    
    You have a new contact request from: ${name} - ${email}.
    
    Message:
    ${message}`
  }

  try {
    await client.messages.create(DOMAIN, messageData)
    res.status(200).json({ submitted: true })
  } catch (e: any) {
    console.error('Error sending email: ', e)
    res.status(400).json({ submitted: false })
  }
}
