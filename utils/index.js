export function formatDateString(isoString, locale = "en-GB") {
  const date = new Date(isoString);
  return date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function countWords(str) {
  return str.split(/\s+/).filter((word) => word !== "").length;
}
