import { ImageClasses } from "@/constants";
import { Box, IconButton, styled, useTheme } from "@mui/material";

export const ImageContainer = styled(Box)(({
  viewCard,
}: {
  viewCard: "grid" | "list";
}) => {
  const theme = useTheme();
  const widthCard = viewCard === "grid" ? "100%" : "120px";
  return {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "baseline",
    minHeight: 100,
    minWidth: widthCard,
    [`& .${ImageClasses.wrapper}`]: {
      width: "100%",
      height: "100%",
      padding: "0px",
      [theme.breakpoints.down("sm")]: {
        width: widthCard,
      },
      "&.swiper-no-swiping": {
        padding: 0,
      },
    },
    [`& .${ImageClasses.pagination}`]: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      textAlign: "center",
      paddingTop: "2px",
      transition: "0.3s opacity ease",
      transform: "translate3d(0, 0, 0)",
      position: "absolute",
      bottom: "8px",
      zIndex: 150,
      "&.swiper-pagination-lock": {
        display: "none",
      },
      [`& .${ImageClasses.bullet}`]: {
        width: "8px",
        height: "8px",
        backgroundColor: "#FFFFFF",
        opacity: 0.5,
        transition: "background-color 0.3s ease",
        borderRadius: "50%",
        display: "inline-block",
        margin: "0 4px",
      },
      [`& .${ImageClasses.bulletActive}`]: {
        backgroundColor: "#FFFFFF",
        opacity: 1,
        width: "16px",
        height: "8px",
        borderRadius: "30%",
      },
    },
  };
});

export const ImageContent = styled(Box)<{
  withClickEvent?: boolean;
  viewCard: "grid" | "list";
}>(({ viewCard }) => {
  const theme = useTheme();
  const widthCard = viewCard === "grid" ? "100%" : "120px";
  const heightCard = viewCard === "grid" ? "100%" : "100px";
  return {
    cursor: "pointer",
    display: "flex",
    position: "relative",
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "12px",
      objectFit: "cover",
      [theme.breakpoints.down("sm")]: {
        width: widthCard,
        height: heightCard,
        objectFit: "cover",
      },
    },
  };
});

export const ButtonFav = styled(IconButton)({
  position: "absolute",
  top: 8,
  right: 8,
  backgroundColor: "#FFFFFF",
  padding: "4px",
  zIndex: 150,
  borderRadius: "64px",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
});
