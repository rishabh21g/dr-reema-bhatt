import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const sendEmail = async (req: NextApiRequest) => {
  const { name, email, phone, date, time } = await req.body;
  try {
    await resend.emails.send({
      from: "Your clinic <onboarding@resend.dev>",
      to: ["rg2845628@gmail.com"],  // reemabhatt@fbd.amrita.edu
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
};
