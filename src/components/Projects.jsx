import Image from "next/image";
import Invoice from "../../public/InvoiceYou.png";
import HypeEcommer from "../../public/HypeEcommer.png";
import UiLinearGradients from "../../public/Ui-LinearGradients.png";
import ArtPx from "../../public/ArtPx.png";
import CoinTz from "../../public/CoinTz.png";
import Link from "next/link";
import { FaReact, FaSass, FaBitcoin } from "react-icons/fa";
import { SiTailwindcss, SiPixabay } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

const Projects = () => {
  return (
    <section id="projects" className="w-full flex justify-center">
      <div className="flex flex-col justify-center w-[80%]">
        <div className="flex flex-col-reverse  sm:flex-row justify-center items-center">
          <div className="text-white text-center sm:text-right sm:w-[30rem]">
            <p className="">
              InvoiceYou originated from a personal experience. After making a
              purchase at a hardware store and not receiving an invoice because
              the owner ran out of invoice books, the idea of creating an
              invoicing application emerged. This is how the inspiration for
              InvoiceYou was born.
            </p>
            <p className="sm:text-right">It is developed with ReactJs.</p>
            <div className="w-full gap-2 flex justify-center sm:justify-end ">
              <p>Technology and tools used in the project:</p>
              <RiJavascriptFill className=" text-yellow-400 text-2xl" />
              <FaReact className=" text-blue-700 text-2xl" />
              <SiTailwindcss className=" text-cyan-500 text-2xl" />
              <FaFilePdf className=" text-red-700 text-2xl" />
            </div>
            <div className="cursor-pointer sm:text-right">
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
          <div className="text-white text-center sm:text-left sm:w-[30rem]">
            <p>
              Furniture Ecommerce App, your destination to find perfect
              furniture that will transform your home into a cozy and elegant
              space. We offer a wide selection of high-quality items, from sofas
              to beds and dining sets, designed to meet all your tastes and
              needs.
            </p>
            <p>It is developed with ReactJs.</p>
            <div className="w-full gap-2 flex justify-center sm:justify-start ">
              <p className="sm:text-right">
                Technology and tools used in the project:
              </p>
              <RiJavascriptFill className=" text-yellow-400 text-2xl" />
              <FaReact className=" text-blue-700 text-2xl" />
              <IoLogoFirebase className=" text-yellow-400 text-2xl" />
              <FaSass className=" text-pink-400 text-2xl" />
            </div>

            <div className="cursor-pointer ">
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
          <div className="text-white text-center sm:text-right sm:w-[30rem]">
            <p className="sm:text-right">
              Ui-LinearGradient is a web application that generates backgrounds
              with the style you like the most. Explore the full range of colors
              to create your design.
            </p>

            <div className="w-full gap-2 flex justify-center sm:justify-end ">
              <p>Technology and tools used in the project:</p>
              <RiJavascriptFill className=" text-yellow-400 text-2xl" />
              <FaReact className=" text-blue-700 text-2xl" />
              <FaSass className=" text-pink-400 text-2xl" />
            </div>

            <div className="cursor-pointer sm:text-right">
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
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <Image width={500} src={ArtPx} alt="img-projects" />
          <div className="text-white text-center sm:text-left sm:w-[30rem]">
            <p>
              ArtPx is a free library of images and videos created with React.
              It provides high-quality search results in various categories and
              is easy to use. Ideal for your visual and design search needs.
            </p>
            <div className="w-full gap-2 flex justify-center sm:justify-start ">
              <p className="sm:text-right">
                Technology and tools used in the project:
              </p>
              <RiJavascriptFill className=" text-yellow-400 text-2xl" />
              <FaReact className=" text-blue-700 text-2xl" />
              <SiPixabay className=" text-green-500 text-2xl" />
              <FaSass className=" text-pink-400 text-2xl" />
            </div>

            <div className="cursor-pointer">
              <Link
                target="_blank"
                href="https://lovely-pastelito-3ba768.netlify.app/"
                className="z-30 inline-flex background-shine bg-[linear-gradient(110deg,#939393,45%,#232323,55%,#939393)] hover:bg-[linear-gradient(110deg,#4a40ae,45%,#ffff,55%,#4a40ae)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent"
              >
                View website
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center">
          <div className="text-white text-center sm:text-right sm:w-[30rem]">
            <p className="sm:text-right">
              CoinTz is a responsive web application developed with React,
              utilizing the CoinGecko API to display current cryptocurrency
              prices.
            </p>
            <p className="sm:text-right">It is developed with ReactJs.</p>
            <div className="w-full gap-2 flex justify-center sm:justify-end ">
              <p>Technology and tools used in the project:</p>
              <RiJavascriptFill className=" text-yellow-400 text-2xl" />
              <FaReact className=" text-blue-700 text-2xl" />
              <FaSass className=" text-pink-400 text-2xl" />
              <FaBitcoin className=" text-yellow-600 text-2xl" />
            </div>

            <div className="z-50 cursor-pointer sm:text-right">
              <Link
                target="_blank"
                href="https://resilient-fairy-8d17a5.netlify.app/"
                className=" inline-flex background-shine bg-[linear-gradient(110deg,#939393,45%,#232323,55%,#939393)] hover:bg-[linear-gradient(110deg,#4a40ae,45%,#ffff,55%,#4a40ae)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent"
              >
                View website
              </Link>
            </div>
          </div>
          <Image width={500} src={CoinTz} alt="img-projects" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
