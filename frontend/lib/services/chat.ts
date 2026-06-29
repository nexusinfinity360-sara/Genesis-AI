import { chatWithGroq } from "@/lib/providers/groq";
import { generateImage } from "@/lib/providers/image";
import { isImagePrompt } from "@/lib/utils/detectPrompt";

export async function chatService(message: string) {
  if (isImagePrompt(message)) {
    const image = await generateImage(message);

    return {
      type: "image",
      image,
    };
  }

  const reply = await chatWithGroq(message);

  return {
    type: "text",
    reply,
  };
}