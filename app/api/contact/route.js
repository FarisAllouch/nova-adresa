 import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const result = await resend.emails.send({
      from: "Nova Adresa <noreply@nova-adresa.com>",
      to: ["allouchfaris21@gmail.com"],
      replyTo: email,
      subject: "Nova poruka sa kontakt forme",
      html: `
        <h2>Nova poruka preko web kontakt forme</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Poruka:</strong> ${message}</p>
      `
    });

    return Response.json({ success: true });
  } 
  catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
