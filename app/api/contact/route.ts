import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, faculty, message } = body;

    // Basic server-side validation
    if (!name || !email || !faculty || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'お問い合わせ <info@arrowheads.co.jp>', // Using verified domain as sender
      to: 'info@arrowheads.co.jp', // Sending to same address
      subject: `新規お問い合わせがありました`,
      replyTo: email, // Makes replying go to the form submitter
      text: 
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Faculty: ${faculty}\n\n` +
        `Message:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a5568; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Faculty:</strong> ${faculty}</p>
          </div>
          
          <div style="background-color: #f7fafc; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #4a5568; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0; padding-top: 10px;">
            <p>This is an automated email from your website contact form.</p>
          </div>
        </div>
      `,
    });
    
    if (error) {
      console.error('Error sending email with Resend:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 