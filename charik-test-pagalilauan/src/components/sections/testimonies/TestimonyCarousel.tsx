// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonies.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Icon from "../../Icon";
import { FaStar } from "react-icons/fa";
import { TESTIMONIES_DATA } from "../../../data/TestimoniesData";

const TestimonyCarousel = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="carousel w-full max-w-[40rem] select-none"
      loop
    >
      {TESTIMONIES_DATA.map((data) => (
        <SwiperSlide key={data.id} className=" p-12">
          <div className="flex flex-col gap-6 items-center justify-center text-center flex-wrap">
            <div className="flex items-center justify-center gap-1 ">
              {Array.from({ length: data.rating }, (_, index) => (
                <Icon
                  key={index}
                  Icon={FaStar}
                  className="h-5 w-5 text-orange-400"
                />
              ))}
            </div>

            <h5 className="text-xl lg:text-3xl leading-relaxed">
              " {data.quote} "
            </h5>

            <div className="flex gap-8 lg:gap-12 items-center pb-8">
              <div className="relative">
                <img
                  src={data.userImg}
                  alt=""
                  className="bg-white h-20 w-20 rounded-full object-cover"
                />
                <img
                  src={data.companyImg}
                  alt=""
                  className="bg-white h-12 w-12 rounded-full absolute right-[-1rem] bottom-[-1rem] object-fill"
                />
              </div>

              <div className="text-left">
                <h6 className="text-base lg:text-lg">{data.name}</h6>
                <p className="text-sm lg:text-base text-white/80 font-light">
                  {data.position}&nbsp; | &nbsp; {data.company}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonyCarousel;
