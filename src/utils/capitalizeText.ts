export const capitalizeText = (text: string) => {
  return text
    .toString()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
