import { FC, useState } from "react";
import { listImageCar } from "@/constants";
import { CatalogCars } from "@/models";
import { capitalizeText } from "@/utils/capitalizeText";
import { formatNumber } from "@/utils/formatNumber";
import { Box } from "@mui/material";
import SwiperImage from "../SwiperImage";
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

const CardProduct = ({
  carData,
  onFavorite,
}: {
  carData: CatalogCars;
  onFavorite: () => void;
}) => {
  const { brand, model, year, mileage, price, city, version, fav } = carData;
  return (
    <Card>
      <SwiperImage
        images={listImageCar}
        favoriteCar={fav}
        onFavorite={onFavorite}
      />
      <Content>
        <Box>
          <WrapperBadge>
            {year && <Badge value={year} />}
            {mileage && <Badge value={`${formatNumber(mileage)} km`} />}
          </WrapperBadge>
          <Container>
            <Title>{`${capitalizeText(brand)} ${capitalizeText(model)}`}</Title>
            <Description>{capitalizeText(version)}</Description>
          </Container>
        </Box>
        <Box>
          <PriceText>R$ {formatNumber(price)}</PriceText>
          <CityText>{city}</CityText>
        </Box>
        <ButtonCard text="Simular parcelas" onClick={() => {}} />
      </Content>
    </Card>
  );
};

export default CardProduct;
