import ArrowIcon from "@mui/icons-material/ArrowForwardIosSharp";
import {
  AccordionProps,
  Box,
  Button,
  styled,
  Theme,
  Typography,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  accordionSummaryClasses,
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  width: "100%",
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&::before": {
    display: "none",
  },
}));

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(() => ({
  backgroundColor: "#FFFFFF",
  padding: "0px",
  [`& .${accordionSummaryClasses.content}`]: {
    padding: "8px 0px",
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)({
  padding: 0,
  paddingBottom: "20px",
});

export const Container = styled(Box)(({ theme }: { theme: Theme }) => ({
  width: 264,
  margin: "16px",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const TextButton = styled(Typography)({
  fontSize: 16,
  fontWeight: 700,
  lineHeight: "24px",
  color: "#1B2141",
  textTransform: "capitalize",
});

export const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const ButtonFilter = styled(Button)({
  justifyContent: "flex-start",
  padding: "0px",
  "&:hover": {
    backgroundColor: "transparent",
  },
});

export const TextFilters = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "20px",
  color: "#1B2141",
  cursor: "pointer",
  textTransform: "capitalize",
  "&:hover": {
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  },
  span: {
    color: "#87899C",
  },
});
