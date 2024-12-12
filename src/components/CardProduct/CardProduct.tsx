import { listImageCar } from "@/constants";
import { capitalizeText } from "@/utils/capitalizeText";
import { formatNumber } from "@/utils/formatNumber";
import { Box, ButtonBase, Typography } from "@mui/material";
import { FC } from "react";
import IconCalculator from "../assets/IconCalculator";
import SwiperImage from "../SwiperImage";
import { CatalogCars } from "@/models";

const CardProduct: FC<CatalogCars> = ({
  brand,
  model,
  year,
  mileage,
  price,
  city,
  version,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "8px",
        flexDirection: "column",
        borderRadius: "12px",
        backgroundColor: "#FFFFFF",
        "@media (max-width: 650px)": {
          flexDirection: "row",
          boxShadow: "none",
          padding: "0px",
        },
        boxShadow:
          "0px 20px 25px 0px rgba(0, 0, 0, 0.09), 0px 1px 10px 0px rgba(0, 0, 0, 0.07)",
      }}
    >
      <SwiperImage banners={listImageCar} />
      <Box
        sx={{
          display: "flex",
          padding: "12px 8px 8px 8px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
          "@media (max-width: 650px)": {
            gap: "0px",
            padding: "0px 8px",
          },
        }}
      >
        <Box>
          <Box sx={{ display: "flex", gap: "8px", marginBottom: "4px" }}>
            {year && (
              <Box
                sx={{
                  display: "flex",
                  padding: "2px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "64px",
                  background: "#EBECF5",
                }}
              >
                <Typography
                  sx={{
                    color: "#1B2141",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "16px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {year}
                </Typography>
              </Box>
            )}
            {mileage && (
              <Box
                sx={{
                  display: "flex",
                  padding: "2px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "64px",
                  background: "#EBECF5",
                }}
              >
                <Typography
                  sx={{
                    color: "#1B2141",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "16px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {formatNumber(mileage)} km
                </Typography>
              </Box>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              "@media (max-width: 650px)": {
                alignItems: "center",
                justifyContent: "center ",
                flexDirection: "row",
                gap: "8px",
              },
            }}
          >
            <Typography
              sx={{
                color: "#1B2141",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "24px",
                whiteSpace: "nowrap",
              }}
            >
              {`${capitalizeText(brand)} ${capitalizeText(model)}`}
            </Typography>
            <Typography
              sx={{
                color: "#1B2141",
                fontSize: "16px",
                textTransform: "capitalize",
                fontWeight: 500,
                lineHeight: "24px",
                lineClamp: 2,
                whiteSpace: "nowrap",
              }}
            >
              {capitalizeText(version)}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#FF7042",
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "30px",
            }}
          >
            R$ {formatNumber(price)}
          </Typography>
          <Typography
            sx={{
              color: "#87899C",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "20px",
            }}
          >
            {city}
          </Typography>
        </Box>
        <ButtonBase
          sx={{
            height: "44px",
            borderRadius: "50px",
            background: "#566DED",
            width: "100%",
            "@media (max-width: 650px)": {
              display: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <IconCalculator />
            <Typography
              sx={{
                color: "#FFF",
                textAlign: "center",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "20px",
              }}
            >
              Simular parcelas
            </Typography>
          </Box>
        </ButtonBase>
      </Box>
    </Box>
  );
};

export default CardProduct;
