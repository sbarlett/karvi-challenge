import { formatNumber } from "@/utils/formatNumber";
import { IconButton } from "@mui/material";
import { IconViewGrid } from "../../assets";
import {
  Container,
  HeaderContainer,
  OrderByContainer,
  Paragraph,
  ParagraphBold,
} from "../styles";

const TopBarFilterMobile = ({ totalCars }: { totalCars?: number }) => {
    return (
      <Container>
        <HeaderContainer>
          <Paragraph>{formatNumber(totalCars)} carros encontrados</Paragraph>
          <OrderByContainer>
            <ParagraphBold>Ordenar por</ParagraphBold>
            <IconButton>
              <IconViewGrid />
            </IconButton>
          </OrderByContainer>
        </HeaderContainer>
      </Container>
    );
};

export default TopBarFilterMobile;
