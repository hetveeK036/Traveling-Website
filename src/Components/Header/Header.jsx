import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Style from "./../Header/Header.module.css";

import Destination1 from "./../../assets/tour-01.png";
import Destination2 from "./../../assets/tour-02.png";
import Destination3 from "./../../assets/tour-03.png";
import Destination4 from "./../../assets/tour-04.png";
import Destination5 from "./../../assets/tour-05.png";
import Destination6 from "./../../assets/tour-06.png";
import { Autoplay } from "swiper/modules";

const Header = () => {
  return (
    <div className={`${Style.header_wrapper} section`}>
      <div className={Style.imageContainer}>
        <h2 className={Style.title}>
          {" "}
          Explore The World,
          <br /> One Unforgettable Journey
        </h2>
      </div>

      <Swiper
        className={Style.swiper}
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{
          delay: 1500,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
        modules={[Autoplay]}
        loop={true}
      >
        <SwiperSlide>
          <div className={Style.DestinationCard}>
            <img src={Destination1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.DestinationCard}>
            <img src={Destination2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.DestinationCard}>
            <img src={Destination3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.DestinationCard}>
            <img src={Destination4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.DestinationCard}>
            <img src={Destination5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Style.DestinationCard}>
            <img src={Destination6} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
