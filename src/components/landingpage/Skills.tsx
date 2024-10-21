"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const Skills = () => {
  const skills = [
    {
      id: 1,
      logo: "/images/nextIcon.svg",
      width: 25,
      height: 23,
      name: "nextjs",
    },
    {
      id: 2,
      logo: "/images/reactIcon.svg",
      width: 25,
      height: 23,
      name: "reactjs",
    },
    {
      id: 3,
      logo: "/images/vueIcon.svg",
      width: 25,
      height: 23,
      name: "vuejs",
    },
    {
      id: 4,
      logo: "/images/tsIcon.svg",
      width: 25,
      height: 23,
      name: "typescript",
    },
    {
      id: 5,
      logo: "/images/jsIcon.svg",
      width: 26,
      height: 24,
      name: "javascript",
    },
    {
      id: 6,
      logo: "/images/bootstrapIcon.svg",
      width: 32,
      height: 35,
      name: "bootstrap",
    },
    {
      id: 7,
      logo: "/images/tailwindIcon.svg",
      width: 26,
      height: 23,
      name: "tailwind",
    },
    {
      id: 8,
      logo: "/images/css3Icon.svg",
      width: 22,
      height: 17,
      name: "css",
    },
    {
      id: 9,
      logo: "/images/html5icon.svg",
      width: 22,
      height: 17,
      name: "html",
    },
  ];
  const skillsMd = [
    {
      id: 1,
      logo: "/images/nextIcon.svg",
      width: 40,
      height: 38,
      name: "nextjs",
    },
    {
      id: 2,
      logo: "/images/reactIcon.svg",
      width: 40,
      height: 38,
      name: "reactjs",
    },
    {
      id: 3,
      logo: "/images/vueIcon.svg",
      width: 40,
      height: 38,
      name: "vuejs",
    },
    {
      id: 4,
      logo: "/images/tsIcon.svg",
      width: 40,
      height: 38,
      name: "typescript",
    },
    {
      id: 5,
      logo: "/images/jsIcon.svg",
      width: 40,
      height: 38,
      name: "javascript",
    },
    {
      id: 6,
      logo: "/images/bootstrapIcon.svg",
      width: 50,
      height: 58,
      name: "bootstrap",
    },
    {
      id: 7,
      logo: "/images/tailwindIcon.svg",
      width: 40,
      height: 38,
      name: "tailwind",
    },
    {
      id: 8,
      logo: "/images/css3Icon.svg",
      width: 35,
      height: 32,
      name: "css",
    },
    {
      id: 9,
      logo: "/images/html5icon.svg",
      width: 35,
      height: 32,
      name: "html",
    },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <Swiper
          slidesPerView={5.5}
          modules={[Mousewheel]}
          mousewheel={{ forceToAxis: true }}
          grabCursor={true}
          freeMode={true}
          className='flex mt-10'
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill.id}>
              <div className='flex flex-col items-center '>
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
                <p className='font-atyp text-xs  font-light mt-1'>
                  {skill.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={7.5}
          modules={[Mousewheel]}
          mousewheel={{ forceToAxis: true }}
          grabCursor={true}
          freeMode={true}
          className='flex mt-20'
        >
          {skillsMd.map((skill) => (
            <SwiperSlide key={skill.id}>
              <div className='flex flex-col items-center'>
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
                <p className='font-atyp font-light mt-1'>{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Skills;
