import IconFilter from "@/components/assets/IconFilter";
import InputSearch from "@/components/Inputs/InputSearch";
import { formatNumber } from "@/utils/formatNumber";
import IconList from "@mui/icons-material/ViewAgendaOutlined";
import { IconButton } from "@mui/material";
import { useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";
import { IconViewGrid } from "../../assets";
import {
  ButtonSearch,
  Container,
  HeaderContainer,
  HeaderSearch,
  OrderByContainer,
  Paragraph,
} from "../styles";
import { FormValues } from "@/schema";

const TopBarFilterMobile = ({ totalCars }: { totalCars?: number }) => {
  const { setValue, watch } = useFormContext<FormValues>();

  const view = watch("view");

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleFilter = useCallback((e: any) => {
    const value = e.target.value;
    setSearchTerm(value);
  }, []);

  const handleViewGrid = () => {
    setValue("view", "grid");
  };

  const handleViewList = () => {
    setValue("view", "list");
  };

  const handleSearch = useCallback(() => {
    const filter = searchTerm !== "" ? searchTerm.split(" ") : [];
    setValue("filters", filter);
  }, [searchTerm]);

  return (
    <Container>
      <HeaderSearch>
        <InputSearch
          onChange={handleFilter}
          placeholder="Buscar"
          name="search"
        />
        <ButtonSearch startIcon={<IconFilter />} onClick={handleSearch}>
          Filtrar
        </ButtonSearch>
      </HeaderSearch>
      <HeaderContainer>
        <Paragraph>{formatNumber(totalCars)} resultados</Paragraph>
        <OrderByContainer>
          {view === "grid" ? (
            <IconButton onClick={handleViewList}>
              <IconList sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
            </IconButton>
          ) : (
            <IconButton onClick={handleViewGrid}>
              <IconViewGrid />
            </IconButton>
          )}
        </OrderByContainer>
      </HeaderContainer>
    </Container>
  );
};

export default TopBarFilterMobile;
