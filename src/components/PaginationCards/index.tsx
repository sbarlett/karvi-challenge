import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { FC, useCallback } from "react";
import { IconArrowLeft, IconArrowRight } from "../assets";
import { calculatePagination } from "@/utils/calculatePagination";

interface Props {
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
}

const PaginationCards: FC<Props> = ({ totalPages, page, setPage }) => {
  const pagesToShow = calculatePagination(totalPages, page);

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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 2,
        width: "100%",
        borderTop: "1px solid #D8DAE3",
      }}
    >
      <Button
        startIcon={<IconArrowLeft />}
        onClick={handlePrevPage}
        disabled={page === 1}
      >
        <Typography
          sx={{
            color: "#5F647A",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "24px",
            textTransform: "capitalize",
          }}
        >
          Anterior
        </Typography>
      </Button>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {pagesToShow.map((item) => (
          <Button
            key={item}
            onClick={() => handleChangePage(item)}
            variant="text"
            sx={{
              minWidth: 0,
              padding: "16px 16px 0px 16px",
              fontSize: 16,
              fontWeight: 700,
              lineHeight: "24px",
              textTransform: "capitalize",
              color: item === page ? "#566DED" : "#5F647A",
              borderTop: item === page ? "2px solid #566DED" : "none",
              borderRadius: 0,
            }}
          >
            {item}
          </Button>
        ))}
      </Box>
      <Button
        endIcon={<IconArrowRight />}
        onClick={handleNextPage}
        disabled={page === totalPages}
      >
        <Typography
          sx={{
            color: "#5F647A",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "24px",
            textTransform: "capitalize",
          }}
        >
          Próximo
        </Typography>
      </Button>
    </Box>
  );
};

export default PaginationCards;
