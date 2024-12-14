import { useCallback } from "react";
import { IconArrowLeft, IconArrowRight } from "../assets";
import {
  CenterBox,
  PaginationButton,
  PaginationContainer,
  PaginationText,
} from "./styles";

const Pagination = ({
  totalPages,
  page,
  setPage,
}: {
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
}) => {
  const handleNextPage = useCallback(() => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }, [page, totalPages, setPage]);

  const handlePrevPage = useCallback(() => {
    if (page > 0) {
      setPage(page - 1);
    }
  }, [page, setPage]);

  const handleChangePage = useCallback(
    (page: number | string) => {
      if (typeof page === "number") {
        setPage(page);
      }
    },
    [setPage]
  );

  return (
    <PaginationContainer>
      <PaginationButton
        startIcon={<IconArrowLeft />}
        onClick={handlePrevPage}
        disabled={page === 1}
      >
        <PaginationText>Anterior</PaginationText>
      </PaginationButton>
      <CenterBox>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (item) => (
            <PaginationButton
              key={item}
              onClick={() => handleChangePage(item)}
              variant="text"
              sx={{
                color: item === page ? "#566DED" : "#5F647A",
                borderTop: item === page ? "2px solid #566DED" : "none",
              }}
            >
              {item}
            </PaginationButton>
          )
        )}
      </CenterBox>
      <PaginationButton
        endIcon={<IconArrowRight />}
        onClick={handleNextPage}
        disabled={page === totalPages}
      >
        <PaginationText>Próximo</PaginationText>
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
