import FavoriteIcon from "@mui/icons-material/Favorite";
import clsx from "clsx";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ImageClasses } from "@/constants";
import { Theme, useMediaQuery } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IconHeart } from "../assets";
import { ButtonFav, ImageContainer, ImageContent } from "./styles";

export interface Image {
  id: number;
  image_url: string;
}

const SwiperImage = ({
  images,
  favoriteCar,
  onFavorite,
}: {
  images: Image[];
  favoriteCar: boolean;
  onFavorite: () => void;
}) => {
  if (!images.length) {
    return null;
  }

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const isOne = images.length === 1;

  return (
    <ImageContainer className={ImageClasses.root}>
      {isMobile ? (
        <ImageContent>
          <img src={images[0]?.image_url} alt={`Image ${images[0]?.id}`} />
          <ButtonFav onClick={onFavorite}>
            {favoriteCar ? (
              <FavoriteIcon sx={{ color: "red", fontSize: 20 }} />
            ) : (
              <IconHeart />
            )}
          </ButtonFav>
        </ImageContent>
      ) : (
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
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <ImageContent>
                <img src={img.image_url} alt={`Image ${img.id}`} />
                <ButtonFav onClick={onFavorite}>
                  {favoriteCar ? (
                    <FavoriteIcon sx={{ color: "red", fontSize: 20 }} />
                  ) : (
                    <IconHeart />
                  )}
                </ButtonFav>
              </ImageContent>
            </SwiperSlide>
          ))}
          <div className={ImageClasses.pagination} />
        </Swiper>
      )}
    </ImageContainer>
  );
};

export default SwiperImage;
