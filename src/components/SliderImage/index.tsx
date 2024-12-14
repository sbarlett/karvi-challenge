import FavoriteIcon from "@mui/icons-material/Favorite";
import clsx from "clsx";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ImageClasses } from "@/constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IconHeart } from "../assets";
import { ButtonFav, ImageContainer, ImageContent } from "./styles";

export interface Image {
  id: number;
  image_url: string;
}

const SliderImage = ({
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

  const isOne = images.length === 1;

  return (
    <ImageContainer className={ImageClasses.root}>
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
        style={{ position: "relative" }}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <ImageContent>
              <img src={img.image_url} alt={`Image ${img.id}`} />
            </ImageContent>
          </SwiperSlide>
        ))}
        <div className={ImageClasses.pagination} />
        <ButtonFav onClick={onFavorite}>
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
