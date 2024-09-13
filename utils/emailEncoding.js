export function encodeEmail(email) {
  return email
    .split("")
    .map((char) => `&#${char.charCodeAt(0)};`)
    .join("");
}
