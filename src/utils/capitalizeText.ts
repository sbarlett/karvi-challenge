export const capitalizeText = (text: string) => {
    const str = text.toString();
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };