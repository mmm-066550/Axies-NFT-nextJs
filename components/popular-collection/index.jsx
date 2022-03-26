import React from "react";
import ViewRow from "../view-row";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import CollectionCard from "../collection-card";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function PopularCollection() {
  return (
    <div className="popular_collection_slider">
      <ViewRow link={"/explore"} title={"Popular Collection"} g_0={true}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: "5000" }}
          slidesPerView={1}
          pagination={{
            el: ".popular_collection_slider .swiper-pagination_wrapper",
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
              <CollectionCard id={i + 1} />
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
