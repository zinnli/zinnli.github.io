export type Heading = {
  id: string;
  text: string;
  level: number;
};

const slugify = (text: string): string => {
  return text
    .trim()
    .toLowerCase()
    .replace(/[ -⁯⸀-⹿\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "")
    .replace(/\s/g, "-");
};

const cleanText = (raw: string): string =>
  raw
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*{1,2}([^*]+)\*{1,2}/g, "$1")
    .trim();

export const extractHeadings = (content: string): Heading[] => {
  const stripped = content.replace(/```[\s\S]*?```/g, "");
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(stripped)) !== null) {
    const level = match[1].length;
    const text = cleanText(match[2]);
    const id = slugify(text);
    headings.push({ id, text, level });
  }

  return headings;
};
