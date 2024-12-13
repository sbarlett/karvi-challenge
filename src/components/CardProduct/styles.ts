import { Box, ButtonBase, styled, Theme, Typography } from "@mui/material";

export const Card = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  padding: "8px",
  flexDirection: "column",
  borderRadius: "12px",
  backgroundColor: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    boxShadow: "none",
    padding: "0px",
  },
  boxShadow:
    "0px 20px 25px 0px rgba(0, 0, 0, 0.09), 0px 1px 10px 0px rgba(0, 0, 0, 0.07)",
}));

export const Content = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  padding: "12px 8px 8px 8px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
  [theme.breakpoints.down("sm")]: {
    gap: "0px",
    padding: "0px 8px",
  },
}));

export const WrapperBadge = styled(Box)({
  display: "flex",
  gap: "8px",
  marginBottom: "4px",
});

export const BadgeContainer = styled(Box)({
  display: "flex",
  padding: "2px 8px",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  borderRadius: "64px",
  background: "#EBECF5",
});

export const BadgeText = styled(Box)({
  color: "#1B2141",
  fontSize: "12px",
  fontWeight: 500,
  lineHeight: "16px",
  whiteSpace: "nowrap",
});

export const Container = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    justifyContent: "center ",
    flexDirection: "row",
    gap: "8px",
  },
}));

export const Title = styled(Typography)({
  color: "#1B2141",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
  whiteSpace: "nowrap",
});

export const Description = styled(Typography)({
  color: "#1B2141",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
  whiteSpace: "nowrap",
});

export const PriceText = styled(Typography)({
  color: "#FF7042",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "30px",
});

export const CityText = styled(Typography)({
  color: "#87899C",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "20px",
});

export const MuiButton = styled(ButtonBase)(({ theme }: { theme: Theme }) => ({
  height: "44px",
  borderRadius: "50px",
  background: "#566DED",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const Wrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
});

export const TextButton = styled(Typography)(({ theme }: { theme: Theme }) => ({
  color: "#FFF",
  textAlign: "center",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "20px",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));
