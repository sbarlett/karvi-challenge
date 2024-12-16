import { filterOrder, filterTranslations } from "@/constants";
import { Filters } from "@/models";
import { FormValues } from "@/schema";
import { ExpandMore } from "@mui/icons-material";
import React, { memo, useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ButtonFilter,
  Container,
  TextButton,
  TextFilters,
  Wrapper,
} from "./styles";

const MenuAside = ({ filters }: { filters: Filters }) => {
  const { setValue, getValues } = useFormContext<FormValues>();

  const [expanded, setExpanded] = useState<string | null>(null);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : null);
    };

  const handleSelectFilter = useCallback(
    (filter: string) => {
      const { filters } = getValues();
      const filterText = filter.toString().toLowerCase();
      const newFilters = filters.includes(filterText)
        ? filters
        : [...filters, filterText];
      setValue("filters", newFilters);
    },
    [getValues, setValue]
  );

  return (
    <Container>
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
            <TextButton>
              {filterTranslations[filterKey as keyof typeof filterTranslations]}
            </TextButton>
          </AccordionSummary>
          <AccordionDetails>
            <Wrapper>
              {filters[filterKey as keyof Filters].map((opt: any) => (
                <ButtonFilter
                  key={opt.name}
                  onClick={() => handleSelectFilter(opt.name)}
                >
                  <TextFilters>{opt?.name}</TextFilters>
                </ButtonFilter>
              ))}
            </Wrapper>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default memo(MenuAside);
