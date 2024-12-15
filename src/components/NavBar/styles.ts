import { AppBar, Box, Drawer, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MuiAppBar = styled(AppBar)({
  position: "unset",
  backgroundColor: "#FFFFFF",
  padding: "0px 30px",
  "& svg": {
    color: "#566DED",
  },
});

export const MuiToolbarBox = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
  justifyContent: "flex-start",
  gap: "20px",
  alignItems: "center",
  width: "100%",
}));

export const LinkStyled = styled(Link)({
  textDecoration: "none",
  color: "#566DED",
  fontSize: "16px",
  fontWeight: "bold",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const MuiDrawer = styled(Drawer)(({ theme }) => ({
  display: "block",
  backgroundColor: "#FFFFFF",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: 240,
  },
}));
