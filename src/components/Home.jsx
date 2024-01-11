import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Home = () => {
  return (
    <section
      id="home"
      className="w-[100%] h-[100vh] flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="flex justify-center items-center w-full h-[100vh]">
        <div class=" -top-4 -z-20">
          <div class="animate-custom h-[310px] w-[5rem] sm:w-[310px] max-w-full animate-pulse-slow rounded-full bg-[#260cf1] blur-[100px]"></div>
        </div>
        <div class=" -top-4 -z-10 ">
          <div class="animate-custom h-[310px] w-[5rem] sm:w-[310px] max-w-full animate-pulse-slow rounded-full bg-[#ac12f9] blur-[100px]"></div>
        </div>
      </div>

      <div className="absolute flex justify-center items-center">
        <div className="text-white">
          <div className="text-center">
            <h1 className="text-[3.5rem] sm:text-[10rem] font-bold">
              Developer
            </h1>

            <p className="sm:text-3xl text-2xl -mt-3 sm:-mt-10 font-thin">
              Juan José Pérez
            </p>
          </div>
        </div>
      </div>
      <Link href="#about" className="text-white ">
        <IoIosArrowDown className=" cursor-pointer absolute text-5xl  bottom-4 left-[43%] sm:left-[48%] transition-transform transform jumping-icon" />
      </Link>
    </section>
  );
};

export default Home;
