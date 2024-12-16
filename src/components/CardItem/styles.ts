import {
  Box,
  ButtonBase,
  styled,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";

export const Card = styled(Box)(({
  viewCard,
}: {
  viewCard: "grid" | "list";
}) => {
  const theme = useTheme();
  return {
    display: "flex",
    width: "100%",
    height: "100%",
    padding: "8px",
    flexDirection: "column",
    borderRadius: "12px",
    backgroundColor: "#FFFFFF",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      position: "unset",
      flexDirection: viewCard === "grid" ? "colum" : "row",
      boxShadow:
        viewCard === "grid"
          ? "0px 20px 25px 0px rgba(0, 0, 0, 0.09), 0px 1px 10px 0px rgba(0, 0, 0, 0.07)"
          : "none",
      padding: viewCard === "grid" ? "8px" : "0px",
    },
    boxShadow:
      "0px 20px 25px 0px rgba(0, 0, 0, 0.09), 0px 1px 10px 0px rgba(0, 0, 0, 0.07)",
  };
});

export const Content = styled(Box)(({
  viewCard,
}: {
  viewCard: "grid" | "list";
}) => {
  const theme = useTheme();
  return {
    display: "flex",
    padding: "12px 8px 8px 8px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    [theme.breakpoints.down("sm")]: {
      gap: viewCard === "grid" ? "8px" : "0px",
      padding: viewCard === "grid" ? "12px 8px 8px 8px" : "0px 8px",
    },
  };
});

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

export const Container = styled(Box)(({
  viewCard,
}: {
  viewCard: "grid" | "list";
}) => {
  const theme = useTheme();
  return {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      alignItems: viewCard === "grid" ? "flex-start" : "center",
      justifyContent: "center",
      flexDirection: viewCard === "grid" ? "column" : "row",
      gap: viewCard === "grid" ? "0px" : "8px",
    },
  };
});

export const Title = styled(Typography)({
  color: "#1B2141",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
  whiteSpace: "nowrap",
  textTransform: "capitalize",
});

export const Description = styled(Typography)({
  color: "#1B2141",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",
  whiteSpace: "nowrap",
  textTransform: "capitalize",
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

export const MuiButton = styled(ButtonBase)(({
  viewCard,
}: {
  viewCard: "grid" | "list";
}) => {
  const theme = useTheme();
  return {
    height: "44px",
    borderRadius: "50px",
    background: "#566DED",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: viewCard === "grid" ? "flex" : "none",
    },
  };
});

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
