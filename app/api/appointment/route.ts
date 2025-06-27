import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, date, time } = body;
  try {
    await resend.emails.send({
      from: "Your clinic <onboarding@resend.dev>",
      to: [process.env.DOCTOR_EMAIL!], 
      subject: "New Appointment Request",
      html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333;">
    <h2 style="color: #0066cc;">New Appointment Request for Dr. Reema Bhatt</h2>

    <p style="margin: 10px 0;">You have received a new appointment request. The details are as follows:</p>

    <table style="width: 100%; border-collapse: collapse; background-color: #fff; border: 1px solid #ddd;">
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Patient Name:</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Date:</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${date}</td>
      </tr>
      <tr>
        <td style="padding: 10px;"><strong>Time:</strong></td>
        <td style="padding: 10px;">${time}</td>
      </tr>
    </table>

    <p style="margin-top: 20px;">Please follow up with the patient as soon as possible.</p>

    <p style="margin-top: 30px; font-size: 0.9em; color: #888;">
      This email was sent by your online appointment booking system.
    </p>
  </div>
`,
    });
    if (!name || !email || !date || !time || !phone) {
      return NextResponse.json(
        { message: "All inputs are mandatory!" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Appointement done Successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: " Error while doing appointment | Server Error" },
      { status: 500 }
    );
  }
}
