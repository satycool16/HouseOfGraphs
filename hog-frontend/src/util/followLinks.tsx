export function followLink(link: string): string {
  return link.slice(link.indexOf("/api") + 4);
}