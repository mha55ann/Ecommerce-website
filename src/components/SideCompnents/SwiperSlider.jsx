import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import s1 from "../../images/s1.jpg";
import s2 from "../../images/s2.jpg";
import s3 from "../../images/s3.png";
import s4 from "../../images/s4.png";

function SwiperSlider() {
  {
    /* array of objects */
  }
  const slides = [
    {
      image: s1,
      title: "Summer Collection",
      subtitle: "Up to 50% off",
      cta: "Shop Now",
    },
    {
      image: s2,
      title: "New Arrivals",
      subtitle: "Discover the latest trends",
      cta: "Explore",
    },
    {
      image: s3,
      title: "Exclusive Deals",
      subtitle: "Limited time offers",
      cta: "Get Offers",
    },
    {
      image: s4,
      title: "Season's Favorites",
      subtitle: "Handpicked for you",
      cta: "View Selection",
    },
  ];

  return (
    // main container for the carousel
    <div className="w-full md:w-[100%] h-[400px] md:h-[500px] relative overflow-hidden rounded-lg shadow-xl">
      {/* Swiper component */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        effect="fade"
        className="h-full"
      >
        {/* map through the array of slides and create a SwiperSlide component for each */}
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/*  overlay container with text and button */}
            <div
              className="absolute inset-0 flex flex-col justify-center items-center text-white p-8"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            >
              {/* title */}
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                {slide.title}
              </h2>
              {/* subtitle */}
              <p className="text-xl md:text-2xl mb-8 text-center">
                {slide.subtitle}
              </p>
              {/* button */}
              <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 transform hover:scale-105">
                {slide.cta}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
