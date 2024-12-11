import { Box, ButtonBase, Typography } from "@mui/material";
import IconCalculator from "../assets/IconCalculator";
import { FC } from "react";
import { capitalizeText } from "@/utils/capitalizeText";
import { formatNumber } from "@/utils/formatNumber";

interface Props {
  city: string;
  year: number;
  brand: string;
  model: string;
  version: string;
  price: number;
  mileage: number;
}

const CardProduct: FC<Props> = ({
  brand,
  model,
  year,
  mileage,
  price,
  city,
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
        boxShadow:
          "0px 20px 25px 0px rgba(0, 0, 0, 0.09), 0px 1px 10px 0px rgba(0, 0, 0, 0.07)",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <img
          src="/car.png"
          alt="Auto"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "12px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "12px 8px 8px 8px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
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
                  }}
                >
                  {formatNumber(mileage)} km
                </Typography>
              </Box>
            )}
          </Box>
          <Typography
            sx={{
              color: "#1B2141",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "24px",
              marginTop: "4px",
            }}
          >
            {capitalizeText(brand)}
          </Typography>
          <Typography
            sx={{
              color: "#1B2141",
              fontSize: "16px",
              fontStyle: "normal",

              fontWeight: 500,
              lineHeight: "24px",
              lineClamp: 2,
            }}
          >
            {capitalizeText(model)}
          </Typography>
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
