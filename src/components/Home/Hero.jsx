import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/1151efc11c-058070b917c83701ded6.png",
    title: "Cyber Revolution",
    description:
      "Experience the ultimate cyberpunk adventure in a neon-lit world",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/9e5314fd73-ae4cfcfe0cbfc8887cd5.png",
    title: "Neon City Awaits",
    description: "Dive deep into the tech-noir streets of the future",
  },
  {
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/f32ad3fe1d-0f93714a4a49d84a6123.png",
    title: "The Battle Begins",
    description: "Gear up for an epic story in a sprawling cyber world",
  },
];

const Hero = () => {
  return (
    <section className="relative h-[550px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        loop={true}
        pagination={{ dynamicBullets: true, clickable: true }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start px-10 text-white ml-6">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-md mb-6 font-semibold">{slide.description}</p>
                <div className="space-x-4">
                  <button className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-white cursor-pointer font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
