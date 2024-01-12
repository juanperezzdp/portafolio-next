"use client";
import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { SiMysql } from "react-icons/si";

const Skill = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition =
        document.getElementById("animatedIcons").offsetTop;

      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className=" gap-20 w-full h-[100vh] flex flex-col justify-center items-center">
      <div>
        <div
          className={`mb-4 text-white text-3xl sm:text-4xl flex gap-4 justify-center items-center ${
            isVisible ? "animate-icons" : ""
          }`}
        >
          <p>Experience</p>
        </div>

        <div
          id="animatedIcons"
          className={`text-white flex flex-wrap justify-center items-center ${
            isVisible ? "animate-icons" : ""
          }`}
        >
          <RiJavascriptFill className="text-[3rem] sm:text-[5rem] text-yellow-400" />
          <FaReact className="text-[3rem] sm:text-[5rem] text-blue-600" />
          <SiMongodb className="text-[3rem] sm:text-[5rem] text-green-900" />
          <IoLogoCss3 className="text-[3rem] sm:text-[5rem] text-blue-600" />
          <TbBrandNextjs className="text-[3rem] sm:text-[5rem] text-slate-500" />
          <FaNodeJs className="text-[3rem] sm:text-[5rem] text-green-500" />
          <IoLogoFirebase className="text-[3rem] sm:text-[5rem] text-yellow-400" />
          <SiTailwindcss className="text-[3rem] sm:text-[5rem] text-cyan-600" />
          <RiSupabaseFill className="text-[3rem] sm:text-[5rem] text-green-800" />
          <SiExpress className="text-[3rem] sm:text-[5rem] text-gray-600" />
          <FaSass className="text-[3rem] sm:text-[5rem] text-pink-500" />
          <FaGithub className="text-[3rem] sm:text-[5rem] text-violet-900" />
        </div>
      </div>

      <div>
        <div
          className={`text-white text-3xl sm:text-4xl mb-4 flex items-center justify-center gap-4  ${
            isVisible ? "animate-iconss" : ""
          }`}
        >
          <p>Learning new tech</p>
        </div>

        <div
          id="animatedIcons"
          className={`text-white flex justify-center items-center ${
            isVisible ? "animate-iconss" : ""
          }`}
        >
          <FaJava className="text-[3rem] sm:text-[5rem] text-red-600" />
          <SiTypescript className="text-[3rem] sm:text-[5rem] text-blue-600" />
          <IoLogoFigma className="text-[3rem] sm:text-[5rem] text-red-600" />
          <SiMysql className="text-[3rem] sm:text-[5rem] text-yellow-400" />
          <SiSpring className="text-[3rem] sm:text-[5rem] text-green-500" />
          <BsFiletypeSql className="text-[3rem] sm:text-[5rem] text-cyan-950" />
        </div>
      </div>
    </section>
  );
};

export default Skill;
