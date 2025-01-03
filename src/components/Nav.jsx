"use client";
import Link from "next/link";
import { useEffect } from "react";
import { MdContactPage } from "react-icons/md";

const Nav = () => {
  const smoothScroll = (targetElement) => {
    const targetPosition = targetElement.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        smoothScroll(targetElement);
      }
    };

    const links = document.querySelectorAll("nav ul a");
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  const downloadResume = () => {
    const pdfPath = "/CvJuanPerez.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "CvJuanPerez.pdf";
    link.click();
  };

  return (
    <>
      <nav className="fixed z-10 text-white -left-4 sm:left-0 w-[5rem]  h-[100vh]  flex flex-col ">
        <ul className=" sm:-mt-4 relative  left-0 transform  gap-5 text-xl font-semibold flex items-center justify-center h-[100vh] [writing-mode:vertical-lr]">
          <Link
            href="#home"
            className="sm:-ml-4 bg-white bg-clip-text text-transparent cursor-pointer hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-sky-500 hover:dark:from-purple-600 hover:dark:to-blue-400 "
          >
            Inicio
          </Link>
          <Link
            href="#about"
            className="sm:-ml-4 bg-white bg-clip-text text-transparent cursor-pointer hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-sky-500 hover:dark:from-purple-600 hover:dark:to-blue-400 "
          >
            Sobre mi
          </Link>
          <Link
            href="#projects"
            className="sm:-ml-4 bg-white bg-clip-text text-transparent cursor-pointer hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-sky-500 hover:dark:from-purple-600 hover:dark:to-blue-400 "
          >
            Proyectos
          </Link>
          <Link
            href="#contact"
            className="sm:-ml-4 bg-white bg-clip-text text-transparent cursor-pointer hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-sky-500 hover:dark:from-purple-600 hover:dark:to-blue-400 "
          >
            Contacto
          </Link>
        </ul>
      </nav>
      <button
        onClick={downloadResume}
        className="cursor-pointer z-10  px-2 py-1 text-sm  text-white  rounded-lg bg-blue-950 hover:bg-blue-900 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-700 hover:scale-105 transition-transform duration-500 ease-in-out flex justify-center items-center fixed bottom-2 sm:bottom-4 left-1 sm:left-7 font-semibold"
      >
        <MdContactPage className="text-2xl mt-2 mr-1 mb-2" /> Descargar CV
      </button>
    </>
  );
};

export default Nav;
