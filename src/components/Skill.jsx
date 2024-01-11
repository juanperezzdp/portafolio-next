"use client";
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
import React, { useEffect, useState } from "react";

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

    // Agregar el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className=" gap-20 w-full h-[100vh] flex flex-col justify-center items-center">
      <div>
        <div
          className={`text-white text-2xl flex gap-4  ${
            isVisible ? "animate-icons" : ""
          }`}
        >
          <p>Experience</p>
          <div>-</div>
          <p>Experience</p>
          <div>-</div>
          <p>Experience</p>
          <div>-</div>
          <p>Experience</p>
          <div>-</div>
          <p>Experience</p>
          <div>-</div>
          <p>Experience</p>
        </div>

        <div
          id="animatedIcons"
          className={`text-white flex justify-center items-center ${
            isVisible ? "animate-icons" : ""
          }`}
        >
          <RiJavascriptFill className="text-[6rem] text-yellow-400" />
          <FaReact className="text-[5rem] text-blue-600" />
          <SiMongodb className="text-[5rem] text-green-900" />
          <IoLogoCss3 className="text-[5rem] text-blue-600" />
          <TbBrandNextjs className="text-[5rem] text-slate-500" />
          <FaNodeJs className="text-[5rem] text-green-500" />
          <IoLogoFirebase className="text-[5rem] text-yellow-400" />
          <SiTailwindcss className="text-[5rem] text-cyan-600" />
          <RiSupabaseFill className="text-[5rem] text-green-800" />
          <SiExpress className="text-[5rem] text-gray-600" />
          <FaSass className="text-[5rem] text-pink-500" />
          <FaGithub className="text-[5rem] text-orange-700" />
        </div>
      </div>

      <div>
        <div
          className={`text-white text-2xl flex gap-4  ${
            isVisible ? "animate-icons" : ""
          }`}
        >
          <p>learning new tech</p>
          <div>-</div>
          <p>learning new tech</p>
          <div>-</div>
          <p>learning new tech</p>
          <div>-</div>
          <p>learning new tech</p>
        </div>

        <div
          id="animatedIcons"
          className={`text-white flex justify-center items-center ${
            isVisible ? "animate-icons" : ""
          }`}
        >
          <RiJavascriptFill className="text-[6rem] text-yellow-400" />
          <FaReact className="text-[5rem] text-blue-600" />
          <SiMongodb className="text-[5rem] text-green-900" />
          <IoLogoCss3 className="text-[5rem] text-blue-600" />
          <TbBrandNextjs className="text-[5rem] text-slate-500" />
          <FaNodeJs className="text-[5rem] text-green-500" />
          <IoLogoFirebase className="text-[5rem] text-yellow-400" />
          <SiTailwindcss className="text-[5rem] text-cyan-600" />
          <RiSupabaseFill className="text-[5rem] text-green-800" />
          <SiExpress className="text-[5rem] text-gray-600" />
          <FaSass className="text-[5rem] text-pink-500" />
          <FaGithub className="text-[5rem] text-orange-700" />
        </div>
      </div>
    </section>
  );
};

export default Skill;
