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

export function isImagePrompt(prompt: string): boolean {
  const text = prompt.toLowerCase();

  return IMAGE_KEYWORDS.some((word) =>
    text.includes(word)
  );
}