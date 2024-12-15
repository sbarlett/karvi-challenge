import { listImageCar } from "@/constants";
import { CatalogCars } from "@/models";
import { capitalizeText } from "@/utils/capitalizeText";
import { formatNumber } from "@/utils/formatNumber";
import { Box } from "@mui/material";
import SliderImage from "../SliderImage";
import Badge from "./Badge";
import ButtonCard from "./ButtonCard";
import {
  Card,
  CityText,
  Container,
  Content,
  Description,
  PriceText,
  Title,
  WrapperBadge,
} from "./styles";

const CardItem = ({
  carData,
  onFavorite,
  viewCard,
}: {
  carData: CatalogCars;
  onFavorite: () => void;
  viewCard: "grid" | "list";
}) => {
  const { brand, model, year, mileage, price, city, version, fav } = carData;
  return (
    <Card viewCard={viewCard}>
      <SliderImage
        images={listImageCar}
        favoriteCar={fav}
        onFavorite={onFavorite}
        viewCard={viewCard}
      />
      <Content viewCard={viewCard}>
        <Box>
          <WrapperBadge>
            {year && <Badge value={year} />}
            {mileage && <Badge value={`${formatNumber(mileage)} km`} />}
          </WrapperBadge>
          <Container viewCard={viewCard}>
            <Title>{`${capitalizeText(brand)} ${capitalizeText(model)}`}</Title>
            <Description>{capitalizeText(version)}</Description>
          </Container>
        </Box>
        <Box>
          <PriceText>R$ {formatNumber(price)}</PriceText>
          <CityText>{city}</CityText>
        </Box>
        <ButtonCard
          text="Simular parcelas"
          onClick={() => {}}
          viewCard={viewCard}
        />
      </Content>
    </Card>
  );
};

export default CardItem;
