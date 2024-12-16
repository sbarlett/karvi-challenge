import FavoriteIcon from "@mui/icons-material/Favorite";
import clsx from "clsx";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ImageClasses } from "@/constants";
import { Image } from "@/models";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IconHeart } from "../assets";
import { ButtonFav, ImageContainer, ImageContent } from "./styles";

const SliderImage = ({
  images,
  favoriteCar,
  onFavorite,
  viewCard,
}: {
  images: Image[];
  favoriteCar: boolean;
  onFavorite: () => void;
  viewCard: "grid" | "list";
}) => {
  if (!images.length) {
    return null;
  }

  const isOne = images.length === 1;
  return (
    <ImageContainer className={ImageClasses.root} viewCard={viewCard}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        className={clsx(ImageClasses.wrapper, {
          "swiper-no-swiping": isOne,
        })}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: `.${ImageClasses.pagination}`,
          bulletClass: ImageClasses.bullet,
          bulletActiveClass: ImageClasses.bulletActive,
        }}
        data-testid="swiper-testid"
        style={{ position: "relative" }}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id} data-testid="swiper-slide-testid">
            <ImageContent viewCard={viewCard}>
              <img src={img.image_url} alt={`Image ${img.id}`} />
            </ImageContent>
          </SwiperSlide>
        ))}
        <Box className={ImageClasses.pagination} />
        <ButtonFav
          onClick={onFavorite}
          data-testid={`${favoriteCar ? "icon-heart-liked" : "icon-heart-empty"}`}
        >
          {favoriteCar ? (
            <FavoriteIcon sx={{ color: "red", fontSize: 20 }} />
          ) : (
            <IconHeart />
          )}
        </ButtonFav>
      </Swiper>
    </ImageContainer>
  );
};

export default SliderImage;
