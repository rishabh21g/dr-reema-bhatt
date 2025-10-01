import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, date } = body;
  console.log(date)
  try {
    const { data, error } = await resend.emails.send({
      from: "Your online clinic Portal <onboarding@resend.dev>",
      to: [process.env.DOCTOR_EMAIL!],
      subject: "New Appointment Request",
      html: `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  <!-- Header -->
  <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
    <h1 style="margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">New Appointment Request</h1>
    <p style="margin: 8px 0 0 0; font-size: 16px; opacity: 0.9;">Dr. Reema Bhatt</p>
  </div>

  <!-- Content -->
  <div style="padding: 32px 24px;">
    <div style="background-color: #f8fafc; border-radius: 6px; padding: 20px; border-left: 4px solid #2563eb;">
      <h3 style="margin: 0 0 16px 0; color: #1e293b; font-size: 18px; font-weight: 600;">Patient Information</h3>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; width: 25%; color: #64748b; font-weight: 500;">Name:</td>
          <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Email:</td>
          <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Phone:</td>
          <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Preferred Date:</td>
          <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${date}</td>
        </tr>
      </table>
    </div>

    <div style="margin-top: 24px; padding: 16px; background-color: #fef3c7; border-radius: 6px; border-left: 4px solid #f59e0b;">
      <p style="margin: 0; color: #92400e; font-size: 14px; font-weight: 500;">
        ⚠️ Action Required: Please review and respond to this appointment request promptly.
      </p>
    </div>
  </div>

  <!-- Footer -->
  <div style="background-color: #f1f5f9; padding: 20px 24px; border-radius: 0 0 8px 8px; text-align: center; border-top: 1px solid #e2e8f0;">
    <p style="margin: 0; color: #64748b; font-size: 13px;">
      This email was sent from your Online Appointment System
    </p>
    <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 12px;">
      © ${new Date().getFullYear()} Dr. Reema Bhatt Clinic
    </p>
  </div>
</div>


`,
    });


    if (!name || !email || !date || !phone) {
      return NextResponse.json(
        { message: "All inputs are mandatory!" },
        { status: 400 }
      );
    }
    // console.log(data);
    if (error) {
      return NextResponse.json(
        {
          message: "Server error please try again later!",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Doctor will contact you shortly" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: " Error while doing appointment | Server Error" + err },
      { status: 500 }
    );
  }
  
}
