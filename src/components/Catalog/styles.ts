import { Box, Divider } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const CatalogContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "20px",
});

export const GridContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "grid",
  gridAutoFlow: "row dense",
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  gridColumnGap: "16px",
  gridRowGap: "16px",
  justifyContent: "center",
  justifyItems: "center",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
  [theme.breakpoints.up("xl")]: {
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  },
}));

export const MuiDivider = styled(Divider)(({ theme }: { theme: Theme }) => ({
  width: "100%",
  backgroundColor: "#E3E5ED",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
