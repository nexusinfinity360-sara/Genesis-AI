import { NextResponse } from "next/server";

const IMAGE_KEYWORDS = [
  "image",
  "generate image",
  "create image",
  "draw",
  "paint",
  "photo",
  "picture",
  "wallpaper",
  "logo",
  "illustration",
  "art",
  "sketch",
  "anime",
  "render",
];

function isImagePrompt(prompt: string) {
  const text = prompt.toLowerCase();

  return IMAGE_KEYWORDS.some((word) => text.includes(word));
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // ------------------------
    // IMAGE REQUEST
    // ------------------------

    if (isImagePrompt(message)) {
      const prompt = encodeURIComponent(message);

      const imageUrl = `https://image.pollinations.ai/prompt/${prompt}`;

      return NextResponse.json({
        type: "image",
        image: imageUrl,
      });
    }

    // ------------------------
    // NORMAL CHAT
    // ------------------------

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: "You are Genesis AI, a helpful assistant.",
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({
        type: "text",
        reply: data.error?.message || "Groq Error",
      });
    }

    return NextResponse.json({
      type: "text",
      reply: data.choices[0].message.content,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json({
      type: "text",
      reply: "Backend Error ⚠️",
    });
  }
}