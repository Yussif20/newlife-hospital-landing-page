import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { heroSliderData } from '../data';

const HeroSlider = () => {
  return (
    <div className={`flex justify-center items-center rtl-class w-full `}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        allowTouchMove={true}
        dir={'rtl'}
        key={'rtl'}
        className="w-screen"
      >
        {heroSliderData.map((hospital, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                className="w-full h-[500px] object-cover"
                src={hospital.image}
                alt={hospital.title}
              />
              <div
                className={`text-3xl font-semibold text-white bg-[#4c93fb] py-4 px-40 rounded-tr-[50px] rounded-bl-[50px]  absolute bottom-10 right-2/4 translate-x-1/2 border-white border`}
              >
                <h3 className="font-medium">{hospital.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
