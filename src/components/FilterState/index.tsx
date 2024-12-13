import { useCallback } from "react";
import { Close } from "@mui/icons-material";
import { useFormContext, useWatch } from "react-hook-form";
import { capitalizeText } from "@/utils/capitalizeText";
import IconTrash from "../assets/IconTrash";
import {
  Container,
  FiltersContainer,
  FilterButton,
  FilterText,
  ClearButton,
  ClearText,
} from "./styles";

const FilterState = () => {
  const { setValue } = useFormContext();
  const filtersActive = useWatch({ name: "filters" });

  const onDeleteFilter = useCallback(
    (filter: string) => {
      const newFilters = filtersActive.filter((f: string) => f !== filter);
      setValue("filters", newFilters);
    },
    [filtersActive, setValue]
  );

  const onClearFilters = useCallback(() => {
    setValue("filters", []);
  }, [setValue]);

  return (
    <Container>
      <FiltersContainer>
        {filtersActive.map((filter: string) => (
          <FilterButton
            key={filter}
            onClick={() => onDeleteFilter(filter)}
            endIcon={<Close sx={{ color: "#B4BEF5" }} />}
          >
            <FilterText>{capitalizeText(filter)}</FilterText>
          </FilterButton>
        ))}
      </FiltersContainer>
      {filtersActive.length > 0 && (
        <ClearButton startIcon={<IconTrash />} onClick={onClearFilters}>
          <ClearText>Limpiar Filtros</ClearText>
        </ClearButton>
      )}
    </Container>
  );
};

export default FilterState;
