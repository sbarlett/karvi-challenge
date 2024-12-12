export const calculatePagination = (
  totalPages: number,
  currentPage: number
) => {
  const pagesToShow = [];
  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pagesToShow.push(i);
    }
  } else {
    if (currentPage <= 4) {
      for (let i = 1; i <= 6; i++) {
        pagesToShow.push(i);
      }
      pagesToShow.push("...");
      pagesToShow.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      pagesToShow.push(1);
      pagesToShow.push("...");
      for (let i = totalPages - 5; i <= totalPages; i++) {
        pagesToShow.push(i);
      }
    } else {
      pagesToShow.push(1);
      pagesToShow.push("...");
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pagesToShow.push(i);
      }
      pagesToShow.push("...");
      pagesToShow.push(totalPages);
    }
  }

  return pagesToShow;
};
