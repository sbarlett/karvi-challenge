import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

export const PaginationContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: 2,
  width: "100%",
  borderTop: "1px solid #D8DAE3",
});

export const PaginationButton = styled(Button)({
  minWidth: 0,
  padding: "16px 16px 0px 16px",
  fontSize: 16,
  fontWeight: 700,
  lineHeight: "24px",
  textTransform: "capitalize",
  borderRadius: 0,
});

export const PaginationText = styled(Typography)({
  color: "#5F647A",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",
  textTransform: "capitalize",
});

export const CenterBox = styled(Box)({
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
});