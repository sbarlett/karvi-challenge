import IconFilter from "@/components/assets/IconFilter";
import InputSearch from "@/components/Inputs/InputSearch";
import { formatNumber } from "@/utils/formatNumber";
import { IconButton } from "@mui/material";
import { IconViewGrid } from "../../assets";
import {
  ButtonSearch,
  Container,
  HeaderContainer,
  HeaderSearch,
  OrderByContainer,
  Paragraph,
} from "../styles";
import { useFormContext } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";

const TopBarFilterMobile = ({ totalCars }: { totalCars?: number }) => {
  const { setValue } = useFormContext();

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleFilter = useCallback((e: any) => {
    const value = e.target.value;
    setSearchTerm(value);
  }, []);

  useEffect(() => {
    const delayFilterCars = setTimeout(() => {
      const filter = searchTerm !== "" ? searchTerm.split(" ") : [];
      setValue("filters", filter);
    }, 500);

    return () => {
      clearTimeout(delayFilterCars);
    };
  }, [searchTerm, setValue]);

  return (
    <Container>
      <HeaderSearch>
        <InputSearch
          onChange={handleFilter}
          placeholder="Buscar"
          name="search"
        />
        <ButtonSearch startIcon={<IconFilter />}>Filtrar</ButtonSearch>
      </HeaderSearch>
      <HeaderContainer>
        <Paragraph>{formatNumber(totalCars)} resultados</Paragraph>
        <OrderByContainer>
          <IconButton>
            <IconViewGrid />
          </IconButton>
        </OrderByContainer>
      </HeaderContainer>
    </Container>
  );
};

export default TopBarFilterMobile;
