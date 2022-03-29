import React from "react";
import ViewRow from "../../components/view-row";
import { Swiper, SwiperSlide } from "swiper/react";
import SellerCard from "../../components/seller-card";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import CollectionCard from "../../components/collection-card";

export default function AuthorsPage() {
  return (
    <section className="authors_page py-5">
      <div className="container py-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 text-center">
            <h3 className="section_head">Top Seller</h3>
            <p className="section_sub_head">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
              asperiores sit.
            </p>
          </div>
        </div>
      </div>
      <ViewRow g_0={true}>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: "5000" }}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            el: ".authors_page .swiper-pagination_wrapper",
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
      <div className="container py-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 text-center">
            <h3 className="section_head">Our Creator</h3>
            <p className="section_sub_head">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
              asperiores sit.
            </p>
          </div>
        </div>
      </div>
      <ViewRow>
        {[...Array(4)].map((_, i) => (
          <CollectionCard key={i} id={i + 1} cols={4} fullWidth={true} />
        ))}
        {[...Array(4)].map((_, i) => (
          <CollectionCard key={i} id={i + 1} cols={4} fullWidth={true} />
        ))}
      </ViewRow>
    </section>
  );
}
