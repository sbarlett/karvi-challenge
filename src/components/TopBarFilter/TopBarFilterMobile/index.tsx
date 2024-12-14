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

const TopBarFilterMobile = ({ totalCars }: { totalCars?: number }) => {
  const handleFilter = (e: any) => {
    const value = e.target.value;
    console.log(value.split(" "), "value");
  };

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
