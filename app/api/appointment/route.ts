import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, date } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: "Your online clinic Portal <onboarding@resend.dev>",
      to: [process.env.DOCTOR_EMAIL!],
      subject: "New Appointment Request",
      html: `
 <div style="font-family: Arial, sans-serif; padding: 16px; background-color: #e6f4ea; color: #0b3d2e; line-height: 1.5; max-width: 600px; margin: auto;">
  <h2 style="margin: 0 0 12px; color: #14532d;">New Appointment: <span style="color: #0b3d2e;">Dr. Reema Bhatt</span></h2>

  <div style="background-color: #ffffff; border-left: 4px solid #14532d; padding: 12px 16px; border-radius: 6px;">
    <div style="margin-bottom: 8px;">
      <strong style="color: #065f46;">👤 Patient:</strong>
      <span style="font-weight: bold; color: #0b3d2e;">${name}</span>
    </div>

    <div style="margin-bottom: 8px;">
      <strong style="color: #065f46;">📧 Email:</strong>
      <span style="font-weight: bold; color: #0b3d2e;">${email}</span>
    </div>

    <div style="margin-bottom: 8px;">
      <strong style="color: #065f46;">📞 Phone:</strong>
      <span style="font-weight: bold; color: #0b3d2e;">${phone}</span>
    </div>

    <div>
      <strong style="color: #065f46;">📅 Date:</strong>
      <span style="font-weight: bold; color: #0b3d2e;">${date}</span>
    </div>
  </div>

  <p style="margin-top: 16px; font-size: 0.85em; color: #475569;">
    Please respond to this request as soon as possible.
  </p>

  <p style="margin-top: 10px; font-size: 0.75em; color: #64748b;">
    — Online Appointment System
  </p>
</div>


`,
    });
    if (!name || !email || !date || !phone) {
      return NextResponse.json(
        { message: "All inputs are mandatory!" },
        { status: 400 }
      );
    }
    console.log(data);
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
