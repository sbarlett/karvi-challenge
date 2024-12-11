import useCatalog from "@/hook/useCatalog";
import { mockData } from "@/mock/mockData";
import { formatNumber } from "@/utils/formatNumber";
import { Box, Button, Typography } from "@mui/material";
import { IconSwitch } from "../assets";
import IconArrowLeft from "../assets/IconArrowLeft";
import IconArrowRight from "../assets/IconArrowRight";
import CardProduct from "../CardProduct/CardProduct";

const Catalog = () => {
  const { data, totalPages, page, setPage } = useCatalog();

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#1B2141",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "20px",
          }}
        >
          {formatNumber(mockData.totalCount)} carros encontrados
        </Typography>
        <Button
          startIcon={<IconSwitch />}
          onClick={() => {}}
          sx={{
            backgroundColor: "#FFFFFF",
            padding: "4px 0px",
            "&:hover": {
              backgroundColor: "#FFFFFF",
            },
            "& .MuiButton-startIcon": {
              marginRight: "4px",
            },
          }}
        >
          <Typography
            sx={{
              color: "#566DED",
              fontSize: 14,
              fontWeight: 500,
              lineHeight: "20px",
              textTransform: "capitalize",
            }}
          >
            Mais relevantes
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "row dense",
          gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
          gridColumnGap: "16px",
          gridRowGap: "16px",
          justifyContent: "center",
          justifyItems: "center",
          "@media (min-width: 600px)": {
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          },
          "@media (min-width: 960px)": {
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          },
          "@media (min-width: 1280px)": {
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          },
          "@media (min-width: 1920px)": {
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          },
          "@media (min-width: 2560px)": {
            gridTemplateColumns: "repeat(auto-fill, minmax(278px, 1fr))",
          },
        }}
      >
        {data?.map((item) => (
          <CardProduct
            key={item.id}
            brand={item.brand}
            model={item.model}
            price={item.price}
            city={item.city}
            year={item.year}
            mileage={item.mileage}
            version={item.version}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
          width: "100%",
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
          {Array.from({ length: totalPages || 0 }, (_, index) => (
            <Button
              key={index + 1}
              onClick={() => setPage(index + 1)}
              variant={page === index + 1 ? "contained" : "outlined"}
              sx={{ margin: 1 }}
            >
              {index + 1}
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
    </Box>
  );
};

export default Catalog;
