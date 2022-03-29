import React from "react";
import ViewRow from "../view-row";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import CategoryCard from "../category-card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const categories = [
  { id: 1, name: "music" },
  { id: 2, name: "domain names" },
  { id: 3, name: "virtual world" },
  { id: 4, name: "utility" },
  { id: 5, name: "sports" },
  { id: 6, name: "art" },
];

export default function CategoriesSlider() {
  return (
    <div className="categories_slider">
      <ViewRow title={"Browse By Category"} g_0={true}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          pagination={{
            el: ".categories_slider .swiper-pagination_wrapper",
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
          {categories.map((_, i) => (
            <SwiperSlide key={i}>
              <CategoryCard category={_} id={i + 1} />
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
