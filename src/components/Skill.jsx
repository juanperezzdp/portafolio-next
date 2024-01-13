"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaSass,
  FaDocker,
  FaJava,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMysql,
  SiSpring,
} from "react-icons/si";
import { RiJavascriptFill, RiSupabaseFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoFigma } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFiletypeSql } from "react-icons/bs";
import Zustand from "../../public/zustand.png";

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
    <section className="overflow-hidden gap-20 w-full h-[100vh] flex flex-col justify-center items-center">
      <div className="w-[80%]">
        <div className="mb-8 sm:mb-8">
          <div
            className={`mb-4 text-white text-3xl sm:text-4xl flex gap-4 justify-center items-center ${
              isVisible ? "animate-icons" : ""
            }`}
          >
            <p>Experience</p>
          </div>

          <div
            id="animatedIcons"
            className={`text-white flex flex-wrap gap-1 justify-center items-center ${
              isVisible ? "animate-icons" : ""
            }`}
          >
            <div className="flex flex-col items-center">
              <RiJavascriptFill className="text-[3rem] sm:text-[5rem] text-yellow-400" />
              <p className="text-xs">JavaScript</p>
            </div>

            <div className="flex flex-col items-center">
              <FaReact className="text-[3rem] sm:text-[5rem] text-blue-600" />
              <p className="text-xs">React</p>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-[3rem] sm:text-[5rem] text-green-900" />
              <p className="text-xs">MongoDB</p>
            </div>

            <div className="flex flex-col items-center">
              <IoLogoCss3 className="text-[3rem] sm:text-[5rem] text-blue-600" />
              <p className="text-xs">Css</p>
            </div>

            <div className="flex flex-col items-center">
              <TbBrandNextjs className="text-[3rem] sm:text-[5rem] text-slate-500" />
              <p className="text-xs">NextJs</p>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-[3rem] sm:text-[5rem] text-green-500" />
              <p className="text-xs">NodeJs</p>
            </div>

            <div className="flex flex-col items-center">
              <IoLogoFirebase className="text-[3rem] sm:text-[5rem] text-yellow-400" />
              <p className="text-xs">Firebase</p>
            </div>

            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-[3rem] sm:text-[5rem] text-cyan-600" />
              <p className="text-xs">Tailwindcss</p>
            </div>

            <div className="flex flex-col items-center">
              <RiSupabaseFill className="text-[3rem] sm:text-[5rem] text-green-800" />
              <p className="text-xs">SupaBase</p>
            </div>

            <div className="flex flex-col items-center">
              <SiExpress className="text-[3rem] sm:text-[5rem] text-gray-600" />
              <p className="text-xs">Express</p>
            </div>

            <div className="flex flex-col items-center">
              <FaSass className="text-[3rem] sm:text-[5rem] text-pink-500" />
              <p className="text-xs">Sass</p>
            </div>

            <div className="flex flex-col items-center">
              <FaGithub className="text-[3rem] sm:text-[5rem] text-violet-900" />
              <p className="text-xs">Git/Github</p>
            </div>
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
            className={`text-white flex flex-wrap gap-1 justify-center items-end ${
              isVisible ? "animate-iconss" : ""
            }`}
          >
            <div className="flex flex-col items-center">
              <FaJava className="text-[3rem] sm:text-[5rem] text-red-600" />
              <p className="text-xs">Java</p>
            </div>
            <div className="flex flex-col items-center">
              <SiTypescript className="text-[3rem] sm:text-[5rem] text-blue-600" />
              <p className="text-xs">Typescript</p>
            </div>

            <div className="flex flex-col items-center">
              <IoLogoFigma className="text-[3rem] sm:text-[5rem] text-red-600" />
              <p className="text-xs">Figma</p>
            </div>

            <div className="flex flex-col items-center">
              <SiMysql className="text-[3rem] sm:text-[5rem] text-yellow-400" />
              <p className="text-xs">MySQL</p>
            </div>

            <div className="flex flex-col items-center">
              <SiSpring className="text-[3rem] sm:text-[5rem] text-green-500" />
              <p className="text-xs">Spring</p>
            </div>

            <div className="flex flex-col items-center">
              <BsFiletypeSql className="text-[3rem] sm:text-[5rem] text-cyan-950" />
              <p className="text-xs">SQL</p>
            </div>

            <div className="flex flex-col items-center">
              <FaDocker className="text-[3rem] sm:text-[5rem] text-blue-600" />
              <p className="text-xs">Docker</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={Zustand}
                width={100}
                alt="logo"
                className="w-[3.5rem] sm:w-[6rem]"
              />
              <p className="text-xs">Zustand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
