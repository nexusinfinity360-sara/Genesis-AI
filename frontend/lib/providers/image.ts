export async function generateImage(prompt: string) {
  const encodedPrompt = encodeURIComponent(prompt);

  return `https://image.pollinations.ai/prompt/${encodedPrompt}`;
}