// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./partners.css";

// import required modules
import { Navigation } from "swiper/modules";
import { PARTNERS_LOGOS } from "../../../data/PartnersData";

const Partners = () => {
  return (
    <section className="pt-12 pb-24 container">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="carousel select-none"
        slidesPerView={2}
        spaceBetween={16}
        loop
        breakpoints={{ 640: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } }}
      >
        {PARTNERS_LOGOS.map((data) => (
          <SwiperSlide key={data.id} className="px-4">
            <div className="w-full flex items-center justify-center">
              <img src={data.logo} alt={data.name} className="max-h-20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Partners;
