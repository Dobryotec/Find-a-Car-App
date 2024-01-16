export const useUtilities = () => {
  const capitalizeFirstLetter = (title) => {
    const firstLetterUpperCase = title[0].toUpperCase();

    return firstLetterUpperCase + title.split("").slice(1).join("");
  };

  return {
    capitalizeFirstLetter,
  };
};
