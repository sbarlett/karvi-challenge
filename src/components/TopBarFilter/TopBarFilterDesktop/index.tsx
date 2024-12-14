import { selectOptions } from "@/constants";
import { capitalizeText } from "@/utils/capitalizeText";
import { formatNumber } from "@/utils/formatNumber";
import { Close, ExpandMore } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { IconSwitch, IconTrash } from "../../assets";
import {
  ButtonStyles,
  ClearButton,
  ClearText,
  Container,
  FilterButton,
  FiltersContainer,
  FilterText,
  HeaderContainer,
  MenuItemStyles,
  MuiSelect,
  OrderByContainer,
  Paragraph,
  ParagraphBold,
  TextButton,
  Wrapper,
} from "../styles";

const TopBarFilterDesktop = ({
  filtersActive,
  onDeleteFilter,
  onClearFilters,
  totalCars,
}: {
  filtersActive: string[];
  onDeleteFilter: (filter: string) => void;
  onClearFilters: () => void;
  totalCars?: number;
}) => {
  const { control } = useFormContext();
  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
      <HeaderContainer>
        <Paragraph>{formatNumber(totalCars)} carros encontrados</Paragraph>
        <OrderByContainer>
          <ParagraphBold>Ordenar por</ParagraphBold>
          <Box>
            <Controller
              control={control}
              name="order"
              render={({ field }) => (
                <MuiSelect
                  {...field}
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                  IconComponent={ExpandMore}
                  displayEmpty
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        boxShadow: "none",
                        border: "1px solid #E3E5ED",
                        backgroundColor: "#FFFFFF",
                      },
                    },
                  }}
                >
                  {selectOptions.map((option) => (
                    <MenuItemStyles value={option.value} key={option.value}>
                      <ButtonStyles startIcon={<IconSwitch />}>
                        <TextButton>{option.label}</TextButton>
                      </ButtonStyles>
                    </MenuItemStyles>
                  ))}
                </MuiSelect>
              )}
            />
          </Box>
        </OrderByContainer>
      </HeaderContainer>
    </Container>
  );
};

export default TopBarFilterDesktop;
