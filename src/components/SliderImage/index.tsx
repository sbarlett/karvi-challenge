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
import { Image } from "@/models";



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
        <div className={ImageClasses.pagination} />
        {favoriteCar ? (
          <ButtonFav onClick={onFavorite} data-testid="icon-heart-liked">
            <FavoriteIcon sx={{ color: "red", fontSize: 20 }} />
          </ButtonFav>
        ) : (
          <ButtonFav onClick={onFavorite} data-testid="icon-heart-empty">
            <IconHeart />
          </ButtonFav>
        )}
      </Swiper>
    </ImageContainer>
  );
};

export default SliderImage;
