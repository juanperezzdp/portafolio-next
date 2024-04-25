import Image from "next/image";
import Invoice from "../../public/InvoiceYou.png";
import HypeEcommer from "../../public/HypeEcommer.png";
import UiLinearGradients from "../../public/Ui-LinearGradients.png";
import ArtPx from "../../public/ArtPx.png";
import CoinTz from "../../public/CoinTz.png";
import GesttorDePermisos from "../../public/gestordepermisos.png";
import Link from "next/link";
import { FaReact, FaSass, FaBitcoin } from "react-icons/fa";
import { SiTailwindcss, SiPixabay, SiMongodb } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

const Projects = () => {
  return (
    <section id="projects" className="w-full flex justify-center">
      <div className="flex flex-col justify-center w-[80%]">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <Image width={500} src={GesttorDePermisos} alt="img-projects" />
          <div className="text-white text-balance text-center sm:text-left sm:w-[30rem]">
            <p className="mb-2">
              This web application manages requests for work permissions,
              providing quick responses through approvals or denials. Users
              receive email verifications and notifications of approval or
              denial, along with instructions. Additionally, it offers an option
              to reset the password in case of forgetfulness.
            </p>
            <p>To test the application you can use this user.</p>
            <p>Email:devjuancode@gmail.com</p>
            <p>Password:123456</p>
            <p>Rol:admin</p>
            <p className="mt-2">It is developed with Nextjs.</p>

            <p className="mt-2">Technology and tools used in the project:</p>
            <div className=" w-full flex justify-center sm:justify-start">
              <BiLogoTypescript className=" text-blue-700 text-2xl" />
              <TbBrandNextjs className=" text-white text-2xl" />
              <SiTailwindcss className=" text-cyan-500 text-2xl" />
              <SiMongodb className=" text-green-500 text-2xl" />
            </div>
            <div className="cursor-pointer mt-4 ">
              <Link
                target="_blank"
                href="https://gestordepermisos.netlify.app/"
                className="z-30 inline-flex background-shine bg-[linear-gradient(110deg,#939393,45%,#232323,55%,#939393)] hover:bg-[linear-gradient(110deg,#4a40ae,45%,#ffff,55%,#4a40ae)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent"
              >
                View website
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse  sm:flex-row justify-center items-center">
          <div className="text-white text-balance text-center sm:text-right sm:w-[30rem]">
            <p>
              InvoiceYou originated from a personal experience. After making a
              purchase at a hardware store and not receiving an invoice because
              the owner ran out of invoice books, the idea of creating an
              invoicing application emerged. This is how the inspiration for
              InvoiceYou was born.
            </p>
            <p className="sm:text-right">It is developed with ReactJs.</p>

            <p className="mt-4">Technology and tools used in the project:</p>
            <div className=" w-full flex justify-center sm:justify-end">
              <RiJavascriptFill className=" text-yellow-400 text-2xl" />
              <FaReact className=" text-blue-700 text-2xl" />
              <SiTailwindcss className=" text-cyan-500 text-2xl" />
              <FaFilePdf className=" text-red-700 text-2xl" />
            </div>
            <div className="cursor-pointer mt-4 sm:text-right">
              <Link
                target="_blank"
                href="https://clinquant-travesseiro-2ec97f.netlify.app/"
                className="z-30 inline-flex background-shine bg-[linear-gradient(110deg,#939393,45%,#232323,55%,#939393)] hover:bg-[linear-gradient(110deg,#4a40ae,45%,#ffff,55%,#4a40ae)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent"
              >
                View website
              </Link>
            </div>
          </div>
          <Image width={500} src={Invoice} alt="img-projects" />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center">
          <Image width={500} src={HypeEcommer} alt="img-projects" />
          <div className=" text-white text-balance text-center sm:text-left sm:w-[30rem]">
            <p>
              Furniture Ecommerce App, your destination to find perfect
              furniture that will transform your home into a cozy and elegant
              space. We offer a wide selection of high-quality items, from sofas
              to beds and dining sets, designed to meet all your tastes and
              needs. It is developed with ReactJs.
            </p>
            <p className="mt-4">Technology and tools used in the project:</p>
            <div className=" w-full flex justify-center sm:justify-start">
              <RiJavascriptFill className=" text-yellow-400 text-2xl" />
              <FaReact className=" text-blue-700 text-2xl" />
              <IoLogoFirebase className=" text-yellow-400 text-2xl" />
              <FaSass className=" text-pink-400 text-2xl" />
            </div>

            <div className="cursor-pointer mt-4 ">
              <Link
                target="_blank"
                href="https://genuine-sorbet-63b4a2.netlify.app/"
                className="z-30 inline-flex background-shine bg-[linear-gradient(110deg,#939393,45%,#232323,55%,#939393)] hover:bg-[linear-gradient(110deg,#4a40ae,45%,#ffff,55%,#4a40ae)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent"
              >
                View website
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center">
          <div className="text-white text-balance text-center sm:text-right sm:w-[30rem]">
            <p className="sm:text-right">
              Ui-LinearGradient is a web application that generates backgrounds
              with the style you like the most. Explore the full range of colors
              to create your design.
            </p>

            <p className="mt-4">Technology and tools used in the project:</p>
            <div className=" w-full flex justify-center sm:justify-end">
              <RiJavascriptFill className=" text-yellow-400 text-2xl" />
              <FaReact className=" text-blue-700 text-2xl" />
              <FaSass className=" text-pink-400 text-2xl" />
            </div>

            <div className="mt-4 cursor-pointer sm:text-right">
              <Link
                target="_blank"
                href="https://incomparable-biscuit-b6bd7d.netlify.app/"
                className="z-30 inline-flex background-shine bg-[linear-gradient(110deg,#939393,45%,#232323,55%,#939393)] hover:bg-[linear-gradient(110deg,#4a40ae,45%,#ffff,55%,#4a40ae)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent"
              >
                View website
              </Link>
            </div>
          </div>
          <Image width={500} src={UiLinearGradients} alt="img-projects" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
