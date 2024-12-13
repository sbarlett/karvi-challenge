import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

export const Container = styled(Box)({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  width: "100%",
});

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