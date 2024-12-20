import { styled, Theme } from "@mui/material/styles";
import {
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const Wrapper = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const FiltersContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  maxWidth: 719,
  flex: 1,
});

export const FilterButton = styled(Button)({
  border: "1px solid #B4BEF5",
  backgroundColor: "#FFFFFF",
  borderRadius: "64px",
  padding: "3px 8px 3px 12px",
});

export const FilterText = styled(Typography)({
  color: "#566DED",
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "20px",
  textTransform: "capitalize",
  whiteSpace: "nowrap",
});

export const ClearButton = styled(Button)({
  backgroundColor: "#FFFFFF",
  padding: "4px 0px",
  "& .MuiButton-startIcon": {
    marginRight: "4px",
  },
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
});

export const ClearText = styled(Typography)({
  color: "#566DED",
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "20px",
  textTransform: "capitalize",
  whiteSpace: "nowrap",
});

export const CatalogContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "20px",
});

export const HeaderSearch = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  width: "100%",
});

export const HeaderContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const ButtonSearch = styled(Button)({
  fontSize: 14,
  fontWeight: 700,
  textTransform: "capitalize",
  color: "#566DED",
});

export const Paragraph = styled(Typography)({
  color: "#1B2141",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "20px",
});

export const ParagraphBold = styled(Paragraph)({
  fontWeight: 700,
  whiteSpace: "nowrap",
});

export const OrderByContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const MuiSelect = styled(Select)({
  border: "none",
  backgroundColor: "transparent",
  "& .MuiSelect-select": {
    padding: "0px 10px",
    backgroundColor: "transparent",
  },
  "&:active": {
    backgroundColor: "transparent",
  },
  "& fieldset": {
    border: "none",
  },
  "& svg": {
    color: "#566DED",
  },
});

export const MenuItemStyles = styled(MenuItem)({
  backgroundColor: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
  "&.Mui-selected": {
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  },
});

export const ButtonStyles = styled(Button)({
  backgroundColor: "#FFFFFF",
  padding: "4px 0px",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
  "& .MuiButton-startIcon": {
    marginRight: "4px",
  },
});

export const TextButton = styled(Typography)({
  color: "#566DED",
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "20px",
  textTransform: "capitalize",
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
