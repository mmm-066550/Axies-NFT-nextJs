import React from "react";
import ViewRow from "../view-row";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import NFTCard from "../nft-card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function LiveAuctions() {
  return (
    <div className="live_aucations_slider pt-5">
      <ViewRow link={"/auctions"} title={"Live Auctions"} g_0={true}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          pagination={{
            el: ".live_aucations_slider .swiper-pagination_wrapper",
            clickable: true,
          }}
          loop={true}
          autoplay={{ delay: "5000" }}
          slidesPerView={1}
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
              <NFTCard id={i + 1} live />
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
