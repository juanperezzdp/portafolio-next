"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaGithub, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const SocialNetworks = () => {
  const [googleMessage, setGoogleMessage] = useState(false);
  const [linkedinMessage, setLinkedinMessage] = useState(false);
  const [githubMessage, setGithubMessage] = useState(false);
  const [tiktokMessage, settiktokMessage] = useState(false);
  const [youtubeMessage, setyoutubeMessage] = useState(false);

  return (
    <>
      <section className="z-10 -mt-7 sm:-mt-0 text-xl fixed h-[100vh]  top-5 right-1 sm:right-8 flex flex-col justify-center items-end gap-4 ">
        <div className="flex items-center gap-4 ">
          {googleMessage && (
            <p className=" animate-fade-in text-sm p-2 rounded-md text-white">
              juanperezzdp@gmail.com
            </p>
          )}
          <Link
            target="_blank"
            href="mailto:juanperezzdp@gmail.com"
            onMouseEnter={() => setGoogleMessage(true)}
            onMouseLeave={() => setGoogleMessage(false)}
            className="cursor-pointer relative inline-block p-px rounded-full  group  bg-gradient-to-r from-purple-600 to-sky-500 dark:from-purple-600 dark:to-blue-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400 before:to-sky-400 dark:before:from-purple-600 dark:before:to-sky-500 before:scale-75 before:opacity-50 before:rounded-md before:blur-lg before:transition before:duration-300 active:before:scale-90 focus:before:scale-90 focus:before:opacity-75 hover:before:scale-100 hover:before:bg-opacity-10"
          >
            <div className="relative h-[2.5rem] w-[2.5rem] sm:w-[3rem] sm:h-[3rem] flex justify-center text-sm font-medium items-center  text-white tracking-wide bg-gray-950  rounded-full group-hover:bg-gray-900 transition duration-300">
              <FaGoogle className="text-xl sm:text-2xl" />
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4 ">
          {linkedinMessage && (
            <p className="animate-fade-in text-sm p-2 rounded-md text-white">
              www.linkedin.com/in/juanperezjp
            </p>
          )}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/juanperezjp/"
            onMouseEnter={() => setLinkedinMessage(true)}
            onMouseLeave={() => setLinkedinMessage(false)}
            className="cursor-pointer relative inline-block p-px rounded-full  group  bg-gradient-to-r from-purple-600 to-sky-500 dark:from-purple-600 dark:to-blue-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400 before:to-sky-400 dark:before:from-purple-600 dark:before:to-sky-500 before:scale-75 before:opacity-50 before:rounded-md before:blur-lg before:transition before:duration-300 active:before:scale-90 focus:before:scale-90 focus:before:opacity-75 hover:before:scale-100 hover:before:bg-opacity-10"
          >
            <div className="relative h-[2.5rem] w-[2.5rem] sm:w-[3rem] sm:h-[3rem] flex justify-center text-sm font-medium items-center  text-white tracking-wide bg-gray-950  rounded-full group-hover:bg-gray-900 transition duration-300">
              <FaLinkedinIn className=" text-xl sm:text-2xl" />
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4 ">
          {githubMessage && (
            <p className="animate-fade-in  text-sm p-2 rounded-md text-white">
              github.com/juanperezzdp
            </p>
          )}
          <Link
            href="https://github.com/juanperezzdp"
            target="_blank"
            onMouseEnter={() => setGithubMessage(true)}
            onMouseLeave={() => setGithubMessage(false)}
            className="cursor-pointer relative inline-block p-px rounded-full  group  bg-gradient-to-r from-purple-600 to-sky-500 dark:from-purple-600 dark:to-blue-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400 before:to-sky-400 dark:before:from-purple-600 dark:before:to-sky-500 before:scale-75 before:opacity-50 before:rounded-md before:blur-lg before:transition before:duration-300 active:before:scale-90 focus:before:scale-90 focus:before:opacity-75 hover:before:scale-100 hover:before:bg-opacity-10"
          >
            <div className="relative h-[2.5rem] w-[2.5rem] sm:w-[3rem] sm:h-[3rem] flex justify-center text-sm font-medium items-center  text-white tracking-wide bg-gray-950  rounded-full group-hover:bg-gray-900 transition duration-300">
              <FaGithub className=" text-xl sm:text-2xl" />
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4 ">
          {tiktokMessage && (
            <p className="animate-fade-in  text-sm p-2 rounded-md text-white">
              tiktok.com/@minicodez
            </p>
          )}
          <Link
            href="https://www.tiktok.com/@minicodez"
            target="_blank"
            onMouseEnter={() => settiktokMessage(true)}
            onMouseLeave={() => settiktokMessage(false)}
            className="cursor-pointer relative inline-block p-px rounded-full  group  bg-gradient-to-r from-purple-600 to-sky-500 dark:from-purple-600 dark:to-blue-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400 before:to-sky-400 dark:before:from-purple-600 dark:before:to-sky-500 before:scale-75 before:opacity-50 before:rounded-md before:blur-lg before:transition before:duration-300 active:before:scale-90 focus:before:scale-90 focus:before:opacity-75 hover:before:scale-100 hover:before:bg-opacity-10"
          >
            <div className="relative h-[2.5rem] w-[2.5rem] sm:w-[3rem] sm:h-[3rem] flex justify-center text-sm font-medium items-center  text-white tracking-wide bg-gray-950  rounded-full group-hover:bg-gray-900 transition duration-300">
              <FaTiktok className="text-xl sm:text-2xl" />
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4 ">
          {youtubeMessage && (
            <p className="animate-fade-in  text-sm p-2 rounded-md text-white">
              youtube.com/@MiniCodezz
            </p>
          )}
          <Link
            href="https://www.youtube.com/@MiniCodezz"
            target="_blank"
            onMouseEnter={() => setyoutubeMessage(true)}
            onMouseLeave={() => setyoutubeMessage(false)}
            className="cursor-pointer relative inline-block p-px rounded-full  group  bg-gradient-to-r from-purple-600 to-sky-500 dark:from-purple-600 dark:to-blue-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400 before:to-sky-400 dark:before:from-purple-600 dark:before:to-sky-500 before:scale-75 before:opacity-50 before:rounded-md before:blur-lg before:transition before:duration-300 active:before:scale-90 focus:before:scale-90 focus:before:opacity-75 hover:before:scale-100 hover:before:bg-opacity-10"
          >
            <div className="relative h-[2.5rem] w-[2.5rem] sm:w-[3rem] sm:h-[3rem] flex justify-center text-sm font-medium items-center  text-white tracking-wide bg-gray-950  rounded-full group-hover:bg-gray-900 transition duration-300">
              <FaYoutube className="text-xl sm:text-2xl" />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SocialNetworks;
