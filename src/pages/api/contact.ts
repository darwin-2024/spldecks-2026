import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { z } from 'zod';

export const prerender = false;

// 1. Schema updated to handle missing fields (Option A)
const contactSchema = z.object({
  name: z.string().min(2, 'Name is required').max(100).trim(),
  email: z.string().email('Invalid email address').trim().toLowerCase(),
  phone: z.string().min(10, 'Invalid phone number').max(20).trim(),
  // Made optional so deleting it from the frontend won't cause a 400 error
  propertyType: z.string().optional(),
  // Switched from strict enum to string for better compatibility with frontend changes
  serviceNeeded: z.string().min(1, 'Service type is required').optional(),
  message: z
    .string()
    .min(10, 'Please provide a bit more detail')
    .max(2000)
    .trim(),
  source: z.string().optional().default('spldecks.com'),
});

const resend = new Resend(import.meta.env.RESEND_API_KEY || 're_placeholder');

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // 2. Validation
    const validatedData = contactSchema.safeParse(data);

    if (!validatedData.success) {
      const errorMessages = validatedData.error.issues
        .map((err) => err.message)
        .join(', ');
      return new Response(JSON.stringify({ error: errorMessages }), {
        status: 400,
      });
    }

    const { name, email, phone, propertyType, serviceNeeded, message, source } =
      validatedData.data;

    // 3. Setup Recipient and Sender
    const DEFAULT_FROM = 'leads@invoices.spldecks.com';
    const DEFAULT_TO = 'contact@spldecks.com';

    const cleanEnv = (val: any, fallback: string) =>
      typeof val === 'string' && val.includes('@')
        ? val.replace(/[^a-zA-Z0-9@._-]/g, '').trim()
        : fallback;

    const fromEmail = cleanEnv(import.meta.env.CONTACT_FORM_FROM, DEFAULT_FROM);
    const toEmail = cleanEnv(
      import.meta.env.CONTACT_FORM_RECIPIENT,
      DEFAULT_TO
    );

    const fromName = `SPL Decks Lead Engine <${fromEmail}>`;

    // 4. Send Email (Skip if no API Key)
    if (
      !import.meta.env.RESEND_API_KEY ||
      import.meta.env.RESEND_API_KEY === 're_placeholder'
    ) {
      console.log('Dev Mode Payload:', validatedData.data);
      return new Response(JSON.stringify({ message: 'Dev Mode: Success!' }), {
        status: 200,
      });
    }

    const { error } = await resend.emails.send({
      from: fromName,
      to: toEmail,
      replyTo: email,
      subject: `[LEAD] ${serviceNeeded || 'General Inquiry'} - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #c2410c; text-transform: uppercase; font-size: 16px; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New Inquiry: SPL Decks Division
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 150px;">Customer:</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Type:</td><td>${propertyType || 'Not Specified'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Service:</td><td style="color: #c2410c; font-weight: bold;">${serviceNeeded || 'General Waterproofing'}</td></tr>
          </table>
          
          <div style="margin-top: 25px; padding: 15px; background: #f9f9f9; border-left: 4px solid #c2410c;">
            <p style="margin: 0; font-weight: bold; font-size: 12px; text-transform: uppercase; color: #666;">Message:</p>
            <p style="margin-top: 10px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 11px; color: #999; text-align: center;">
            Lead captured via ${source} • SPL Waterproofing Inc.
          </p>
        </div>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(
      JSON.stringify({ message: 'Request sent successfully!' }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
    });
  }
};
