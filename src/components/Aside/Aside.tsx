import { mockData } from "@/mock/mockData";
import { capitalizeText } from "@/utils/capitalizeText";
import { ExpandMore } from "@mui/icons-material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Box, Button } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useFormContext } from "react-hook-form";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  width: "100%",
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(() => ({
  backgroundColor: "#FFFFFF",
  padding: "0px",
  [`& .${accordionSummaryClasses.content}`]: {
    padding: "8px 0px",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)({
  padding: 0,
  paddingBottom: "20px",
});

interface FilterOption {
  id: number | string;
  name: string | number;
  slug?: string;
  brand?: string;
}

interface AvailableFilters {
  year: FilterOption[];
  city: FilterOption[];
  brand: FilterOption[];
  model: FilterOption[];
  version: FilterOption[];
}

const filterTranslations: any = {
  brand: "Marca",
  year: "Año",
  city: "Ciudad",
  model: "Modelo",
  version: "Versión",
};

const filterOrder = ["brand", "model", "year", "version", "city"];

const Aside = () => {
  const [expanded, setExpanded] = React.useState<string | null>(null);

  const { setValue, getValues } = useFormContext();

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : null);
    };

  const handleSelectFilter = (filter: string) => {
    const { filters } = getValues();
    const newFilters = filters.includes(filter)
      ? filters
      : [...filters, filter];
    setValue("filters", newFilters);
  };

  const filters: AvailableFilters = mockData.availableFilters;

  return (
    <Box sx={{ width: 264, margin: "16px" }}>
      {filterOrder.map((filterKey) => (
        <Accordion
          key={filterKey}
          expanded={expanded === filterKey}
          onChange={handleChange(filterKey)}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={<ExpandMore sx={{ color: "#1B2141" }} />}
          >
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 700,
                lineHeight: "24px",
                color: "#1B2141",
                textTransform: "capitalize",
              }}
            >
              {filterTranslations[filterKey as keyof typeof filterTranslations]}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {filters[filterKey as keyof AvailableFilters].map((opt: any) => (
                <Button
                  key={opt.name}
                  sx={{
                    justifyContent: "flex-start",
                    padding: "0px",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => handleSelectFilter(opt.name)}
                >
                  <Typography
                    sx={{
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
                    }}
                  >
                    {capitalizeText(opt?.name)}{" "}
                    {/* <span
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        lineHeight: "20px",
                        color: "grey",
                      }}
                    >
                      ({opt.count})
                    </span> */}
                  </Typography>
                </Button>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Aside;
