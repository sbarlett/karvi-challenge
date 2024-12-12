import FavoriteIcon from "@mui/icons-material/Favorite";
import clsx from "clsx";
import React, { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IconButton, styled, Theme, useMediaQuery } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IconHeart } from "../assets";

const BannerClasses = {
  root: "banner",
  wrapper: "banner-wrapper",
  pagination: "banner-pagination",
  bullet: "banner-pagination-bullet",
  bulletActive: "banner-pagination-bullet-active",
};

export interface Banner {
  id: number;
  image_url: string;
}

interface BannerProps {
  banners: Banner[];
}

const SwiperImage: React.FC<BannerProps> = ({ banners }) => {
  if (!banners.length) {
    return null;
  }

  const [favoriteCar, setFavoriteCar] = useState<boolean>(false);

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const handleFavoriteCar = () => {
    setFavoriteCar((prev) => !prev);
  };

  const isOne = banners.length === 1;

  return (
    <BannerContainer className={BannerClasses.root}>
      {isMobile ? (
        <BannerContent>
          <img src={banners[0]?.image_url} alt={`Banner ${banners[0]?.id}`} />
          <IconButton
            onClick={handleFavoriteCar}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "#FFFFFF",
              padding: "4px",
              borderRadius: "64px",
              "&:hover": {
                backgroundColor: "#FFFFFF",
              },
            }}
          >
            {favoriteCar ? (
              <FavoriteIcon sx={{ color: "red", fontSize: 20 }} />
            ) : (
              <IconHeart />
            )}
          </IconButton>
        </BannerContent>
      ) : (
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          className={clsx(BannerClasses.wrapper, {
            "swiper-no-swiping": isOne,
          })}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: `.${BannerClasses.pagination}`,
            bulletClass: BannerClasses.bullet,
            bulletActiveClass: BannerClasses.bulletActive,
          }}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <BannerContent>
                <img src={banner.image_url} alt={`Banner ${banner.id}`} />
                <IconButton
                  onClick={handleFavoriteCar}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    backgroundColor: "#FFFFFF",
                    padding: "4px",
                    borderRadius: "64px",
                    "&:hover": {
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                >
                  {favoriteCar ? (
                    <FavoriteIcon sx={{ color: "red", fontSize: 20 }} />
                  ) : (
                    <IconHeart />
                  )}
                </IconButton>
              </BannerContent>
            </SwiperSlide>
          ))}
          <div className={BannerClasses.pagination} />
        </Swiper>
      )}
    </BannerContainer>
  );
};

export default SwiperImage;

const BannerContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "baseline",
  minHeight: 100,
  minWidth: 120,
  [`& .${BannerClasses.wrapper}`]: {
    width: "100%",
    height: "100%",
    padding: "0 0 10px 0",
    "&.swiper-no-swiping": {
      padding: 0,
    },
  },
  [`& .${BannerClasses.pagination}`]: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "2px",
    transition: "0.3s opacity ease",
    transform: "translate3d(0, 0, 0)",
    position: "absolute",
    bottom: "20px",
    zIndex: 150,
    "&.swiper-pagination-lock": {
      display: "none",
    },
    [`& .${BannerClasses.bullet}`]: {
      width: "8px",
      height: "8px",
      backgroundColor: "#FFFFFF",
      opacity: 0.5,
      transition: "background-color 0.3s ease",
      borderRadius: "50%",
      display: "inline-block",
      margin: "0 4px",
    },
    [`& .${BannerClasses.bulletActive}`]: {
      backgroundColor: "#FFFFFF",
      opacity: 1,
      width: "16px",
      height: "8px",
      borderRadius: "30%",
    },
  },
});

const BannerContent = styled("div")<{ withClickEvent?: boolean }>(
  ({ theme }: { theme: Theme }) => ({
    cursor: "pointer",
    display: "flex",
    position: "relative",
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "12px",
      objectFit: "cover",
      [theme.breakpoints.down("sm")]: {
        width: "120px",
        height: "100px",
        objectFit: "contain",
      },
    },
  })
);
