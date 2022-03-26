import React from "react";
import ViewRow from "../view-row";
import { Swiper, SwiperSlide } from "swiper/react";
import SellerCard from "../seller-card";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function TopSellsers() {
  return (
    <div className="top_sellers_slider">
      <ViewRow link={"/explore"} title={"Top Sellers"} g_0={true}>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: "5000" }}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            el: ".top_sellers_slider .swiper-pagination_wrapper",
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {[...Array(6)].map((_, i) => (
            <SwiperSlide key={i}>
              <SellerCard id={i + 1} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="possition-relative text-center pt-4">
          <div className="swiper-pagination_wrapper"></div>
        </div>
      </ViewRow>
    </div>
  );
}
