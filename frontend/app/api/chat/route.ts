import { NextResponse } from "next/server";
import { chatService } from "@/lib/services/chat";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const result = await chatService(message);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Chat API Error:", error);

    return NextResponse.json(
      {
        type: "text",
        reply: "Backend Error ⚠️",
      },
      {
        status: 500,
      }
    );
  }
}