import { CatalogCars, Pagination } from "@/models";
import { formatNumber } from "@/utils/formatNumber";
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FC, Fragment, useState } from "react";
import { IconSwitch, IconViewGrid } from "../assets";
import CardProduct from "../CardProduct/CardProduct";
import PaginationCards from "../PaginationCards";
import { ExpandMore } from "@mui/icons-material";

interface Props {
  data: CatalogCars[];
  pagination: Pagination;
}

const Catalog: FC<Props> = ({ data, pagination }) => {
  const { page, totalPages, setPage, totalItems } = pagination;

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const [order, setOrder] = useState("relevant");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setOrder(event.target.value as string);
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
          alignItems: "center",
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
          {formatNumber(totalItems)} carros encontrados
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Typography
            sx={{
              color: "#1B2141",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
            }}
          >
            Ordenar por
          </Typography>
          {isMobile ? (
            <IconButton>
              <IconViewGrid />
            </IconButton>
          ) : (
            <>
              <Box>
                <FormControl sx={{ border: "none" }}>
                  <Select
                    id="demo-simple-select"
                    value={order}
                    onChange={(e) => handleChange(e as any)}
                    IconComponent={ExpandMore}
                    displayEmpty
                    sx={{
                      border: "none",
                      "& .MuiSelect-select": {
                        padding: "0px 10px", // Remueve padding del área seleccionada
                        backgroundColor: "transparent",
                      },
                      "& fieldset": {
                        border: "none", // Remueve borde del select
                      },
                      "& svg": {
                        color: "#566DED",
                      },
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          boxShadow: "none",
                          border: "1px solid #E3E5ED",
                          backgroundColor: "#FFFFFF",
                        },
                      },
                    }}
                  >
                    <MenuItem
                      value="relevant"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        "&:hover": {
                          backgroundColor: "#FFFFFF", // Fondo al pasar el mouse
                        },
                        "&.Mui-selected": {
                          backgroundColor: "#FFFFFF", // Fondo cuando está seleccionado
                          "&:hover": {
                            backgroundColor: "#FFFFFF", // Fondo al pasar el mouse mientras está seleccionado
                          },
                        },
                      }}
                    >
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
                          Mas relevantes
                        </Typography>
                      </Button>
                    </MenuItem>
                    <MenuItem
                      value="min"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        "&:hover": {
                          backgroundColor: "#FFFFFF", // Fondo al pasar el mouse
                        },
                        "&.Mui-selected": {
                          backgroundColor: "#FFFFFF", // Fondo cuando está seleccionado
                          "&:hover": {
                            backgroundColor: "#FFFFFF", // Fondo al pasar el mouse mientras está seleccionado
                          },
                        },
                      }}
                    >
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
                          Menos precio
                        </Typography>
                      </Button>
                    </MenuItem>
                    <MenuItem
                      value="max"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        "&:hover": {
                          backgroundColor: "#FFFFFF", // Fondo al pasar el mouse
                        },
                        "&.Mui-selected": {
                          backgroundColor: "#FFFFFF", // Fondo cuando está seleccionado
                          "&:hover": {
                            backgroundColor: "#FFFFFF", // Fondo al pasar el mouse mientras está seleccionado
                          },
                        },
                      }}
                    >
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
                          Mayor precio
                        </Typography>
                      </Button>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </>
          )}
        </Box>
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
          "@media (min-width: 650px)": {
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
          <Fragment key={item.id}>
            <CardProduct
              brand={item.brand}
              model={item.model}
              price={item.price}
              city={item.city}
              year={item.year}
              mileage={item.mileage}
              version={item.version}
            />
            {isMobile && (
              <Divider sx={{ width: "100%", backgroundColor: "#E3E5ED" }} />
            )}
          </Fragment>
        ))}
      </Box>
      {totalPages > 1 && (
        <PaginationCards
          totalPages={totalPages}
          page={page}
          setPage={setPage}
        />
      )}
    </Box>
  );
};

export default Catalog;
