import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/f32ad3fe1d-0f93714a4a49d84a6123.png",
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
    <section className="relative h-[600px]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-10 text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-6">{slide.description}</p>
                <div className="space-x-4">
                  <button className="bg-[#2a94f7] px-4 py-2 rounded hover:bg-indigo-700">
                    Play Now
                  </button>
                  <button className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-white">
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
