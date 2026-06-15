import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: unknown) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const { name, email, date, time } = await req.json();

    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Correo electrónico inválido" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Landing Page <onboarding@resend.dev>",
      to: "guillermofuentes24@gmail.com",
      subject: `📅 Nueva reunión agendada — ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; max-width: 520px; margin: 0 auto; background: #0f172a; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;">
          <div style=" padding: 32px 28px;">
            <h1 style="color: #ffffff; font-size: 22px; margin: 0; font-weight: 700;">📅 Nueva reunión agendada</h1>
            <p style="color: #bfdbfe; font-size: 14px; margin: 8px 0 0 0;">Se ha recibido una nueva solicitud de reunión desde el portfolio.</p>
          </div>
          <div style="padding: 28px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 14px 16px; border-bottom: 1px solid #1e293b;">
                  <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Nombre</span>
                  <p style="color: #f1f5f9; font-size: 16px; margin: 4px 0 0 0; font-weight: 600;">${name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 14px 16px; border-bottom: 1px solid #1e293b;">
                  <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Correo</span>
                  <p style="color: #f1f5f9; font-size: 16px; margin: 4px 0 0 0; font-weight: 600;">${email}</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 14px 16px; border-bottom: 1px solid #1e293b;">
                  <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Fecha</span>
                  <p style="color: #f1f5f9; font-size: 16px; margin: 4px 0 0 0; font-weight: 600;">${date}</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 14px 16px;">
                  <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Hora</span>
                  <p style="color: #f1f5f9; font-size: 16px; margin: 4px 0 0 0; font-weight: 600;">${time}</p>
                </td>
              </tr>
            </table>
          </div>
          <div style="padding: 0 28px 24px;">
            <p style="color: #64748b; font-size: 13px; margin: 0; text-align: center;">
              Recuerda contactar a <strong style="color: #94a3b8;">${name}</strong> para confirmar la reunión.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Booking API error:", err);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
