import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({
        reply: "GROQ_API_KEY missing in .env.local",
      });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("GROQ ERROR:", data);

      return NextResponse.json({
        reply: data.error?.message || "Groq API failed",
      });
    }

    return NextResponse.json({
      reply: data.choices?.[0]?.message?.content,
    });

  } catch (error) {
    console.log("SERVER ERROR:", error);

    return NextResponse.json({
      reply: "Backend error ⚠️",
    });
  }
}