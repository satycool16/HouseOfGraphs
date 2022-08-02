export const getIconFromName = (name: string) => {
  let firstLetterCode: number = name.charAt(0).toLowerCase().charCodeAt(0);
  return "/account/icon" + (firstLetterCode%10 + 1) + ".png"
}