import { ImageClasses } from "@/constants";
import { Box, IconButton, styled, Theme } from "@mui/material";

export const ImageContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "baseline",
  minHeight: 100,
  minWidth: 120,
  [`& .${ImageClasses.wrapper}`]: {
    width: "100%",
    height: "100%",
    padding: "0 0 10px 0",
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
    bottom: "20px",
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
});

export const ImageContent = styled(Box)<{ withClickEvent?: boolean }>(
  ({ theme }: { theme: Theme }) => ({
    cursor: "pointer",
    display: "flex",
    position: "relative",
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "12px",
      objectFit: "cover",
      [theme.breakpoints.down("sm")]: {
        width: "120px",
        height: "100px",
        objectFit: "contain",
      },
    },
  })
);

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
