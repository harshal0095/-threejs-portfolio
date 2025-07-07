import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Option 1: Send email using a service like Resend, SendGrid, or Nodemailer
    // For now, we'll just log the message (you can replace this with actual email sending)
    console.log('New contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    })

    // Option 2: Store in database (if you have one)
    // await db.contact.create({ data: { name, email, message } })

    // Option 3: Send to your email using a service
    // Example with a hypothetical email service:
    // await sendEmail({
    //   to: 'harshalpanchal4517@gmail.com',
    //   subject: `New Contact Form Message from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    // })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error handling contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
} 