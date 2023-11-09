import { GiGamepadCross, GiBlackFlag } from "react-icons/gi";
import { FaSnowman, FaCode } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Category = () => {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <div className="py-10 space-y-4">
      <h1 className="text-3xl  text-center font-semibold py-5">
        What can you write this site
      </h1>
      <div className="max-w-7xl py-3 gap-2 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  mx-auto">
        <div
          className="flex p-3 border rounded-md flex-col items-center justify-center "
          data-aos="fade-up"
     data-aos-duration="3000"
        >
          <GiGamepadCross className="text-3xl"></GiGamepadCross>
          <h1 className="text-xl font-semibold">Sport</h1>
          <p className="text-xs text-justify">
            Get ready for an adrenaline rush as our Sports section takes you on
            a thrilling journey through the world of athletics. Whether you're a
            fan of mainstream sports or niche activities, find engaging content,
            match analyses, athlete profiles, and tips to enhance your own
            sporting endeavors.
          </p>
        </div>
        <div
          className="flex p-3 border rounded-md flex-col items-center justify-center"
          data-aos="fade-up"
     data-aos-duration="3000"
        >
          <GiBlackFlag className="text-3xl"></GiBlackFlag>
          <h1 className="text-xl font-semibold">Tour</h1>
          <p className="text-xs text-justify">
            Embark on a virtual adventure with our Travel category, where
            exploration knows no bounds. Immerse yourself in travelogues,
            destination guides, and travel tips that cater to every
            wanderlust-filled soul. From hidden gems to popular hotspots,
            experience the world through the eyes of passionate globetrotters.
          </p>
        </div>
        <div
          className="flex p-3 border rounded-md flex-col items-center justify-center"
          data-aos="fade-up"
     data-aos-duration="3000"
        >
          <FaCode className="text-3xl"></FaCode>
          <h1 className="text-xl font-semibold">Programing</h1>
          <p className="text-xs text-justify">
            Unleash your coding prowess and stay ahead in the ever-evolving tech
            landscape. Our Programming category is a haven for developers, tech
            enthusiasts, and coding novices alike. Explore tutorials, coding
            challenges, and in-depth articles covering a variety of programming
            languages and technologies.
          </p>
        </div>
        <div
          className="flex p-3 border rounded-md flex-col items-center justify-center"
          data-aos="fade-up"
     data-aos-duration="3000"
        >
          <FaSnowman className="text-3xl"></FaSnowman>
          <h1 className="text-xl font-semibold">Health</h1>
          <p className="text-xs text-justify">
            Dive into a world of wellness and vitality. Our Health section
            covers a broad spectrum of topics, from fitness routines and
            nutritious recipes to mental well-being and mindfulness practices.
            Discover expert advice, personal stories, and the latest trends in
            the pursuit of a healthier and happier life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
