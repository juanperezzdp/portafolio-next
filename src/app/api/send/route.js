// /pages/api/send.js

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, issue } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "juanperezbikerr@gmail.com",
        pass: process.env.NODEMAILER_KEY,
      },
    });

    const mailOptions = {
      from: email,
      to: "juanperezzdp@gmail.com",
      subject: issue,
      text: `Email: ${email}\n Asunto: ${issue}`,
    };

    // Envía el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Correo electrónico enviado con éxito",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el correo electrónico" },
      { status: 500 }
    );
  }
}
