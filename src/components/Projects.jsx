"use client";

import Image from "next/image";
import Invoice from "../../public/InvoiceYou.png";
import Rhaset from "../../public/rhaset web.png";
import UiLinearGradients from "../../public/Ui-LinearGradients.png";
import GesttorDePermisos from "../../public/gestordepermiso.png";
import Link from "next/link";
import { FaReact, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { useState } from "react";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import { SiGooglecalendar } from "react-icons/si";

const Projects = () => {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <section id="projects" className="w-full flex justify-center">
      <div className="flex flex-col justify-center w-[80%]">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <Image width={500} src={Rhaset} alt="img-projects" />
          <div className=" text-white text-balance text-center sm:text-left sm:w-[30rem]">
            <p>
              Desarrollé la plataforma web oficial de Rhaset, una tienda
              colombiana de ropa enfocada en camisetas y hoodies para hombre y
              mujer. El sitio fue diseñado para ofrecer una experiencia de
              usuario fluida, moderna y totalmente responsive, con enfoque en el
              catálogo de productos, la atención personalizada vía WhatsApp y
              una interfaz segura para autenticación de usuarios.
            </p>
            <p className="mt-4">
              Tecnología y herramientas utilizadas en el proyecto:
            </p>
            <div className=" w-full flex justify-center sm:justify-start">
              <BiLogoTypescript className=" text-blue-700 text-2xl" />
              <TbBrandNextjs className=" text-white text-2xl" />
              <SiTailwindcss className=" text-cyan-500 text-2xl" />
              <SiMongodb className=" text-green-500 text-2xl" />
            </div>

            <div className="cursor-pointer mt-4 ">
              <Link
                target="_blank"
                href="https://www.rhaset.com/"
                className="z-30 inline-flex background-shine bg-[linear-gradient(110deg,#939393,45%,#232323,55%,#939393)] hover:bg-[linear-gradient(110deg,#4a40ae,45%,#ffff,55%,#4a40ae)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent"
              >
                Ver sitio web
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-8">
          <div className="text-white text-balance text-center sm:text-right sm:w-[30rem]">
            <p>
              El chatbot de WhatsApp utiliza inteligencia artificial y se
              integra con Google Calendar para agendar tus citas de forma rápida
              y eficiente. Solo envía un mensaje y el chatbot, impulsado por
              GPT-3, te guiará en el proceso, verificando la disponibilidad y
              registrando la cita en tu calendario. Ideal para negocios que
              buscan optimizar la gestión de reservas y brindar una experiencia
              más ágil y profesional a sus clientes.
            </p>
            <p className="sm:text-right mt-4">
              Este chatbot de WhatsApp, esta desarrollado con la librería create
              bot-whatsapp@latest
            </p>

            <p className="sm:text-right mt-4">
              Haz clic en el celular para escuchar la presentación del chatbot.
            </p>
            <p className="sm:text-right mt-4">
              Si quiere una prueba escribe por whatsapp al numero +57 3188989750
            </p>
            <p className="mt-4">tecnología usada en este proyecto:</p>
            <div className=" w-full flex justify-center sm:justify-end gap-2">
              <RiJavascriptFill className=" text-yellow-400 text-2xl" />
              <FaNode className=" text-green-700 text-3xl" />
              <SiOpenai className=" text-blue-700 text-2xl" />
              <SiGooglecalendar className=" text-violet-800 text-2xl" />
            </div>
            <div className="cursor-pointer mt-4 ">
              <Link
                target="_blank"
                href="https://github.com/juanperezzdp/ChatBotSalonDeBellezaCalendar"
                className="z-30 inline-flex background-shine bg-[linear-gradient(110deg,#939393,45%,#232323,55%,#939393)] hover:bg-[linear-gradient(110deg,#4a40ae,45%,#ffff,55%,#4a40ae)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent"
              >
                Ver repositorio
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center relative cursor-pointer ">
            {isMuted === true && (
              <IoVolumeMuteOutline
                className="absolute z-10 text-7xl text-white hover:scale-125 duration-150"
                onClick={() => setIsMuted(!isMuted)}
              />
            )}
            <video
              autoPlay
              loop
              muted={isMuted}
              width="250"
              onClick={() => setIsMuted(!isMuted)}
              src="https://juan-perez.netlify.app/chatbot.mp4"
              type="video/mp4"
            >
              {/* http://localhost:3000/chatbot.mp4*/}
            </video>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <Image width={500} src={GesttorDePermisos} alt="img-projects" />
          <div className="text-white text-balance text-center sm:text-left sm:w-[30rem]">
            <p className="mb-2">
              Esta aplicación web gestiona solicitudes de permisos de trabajo,
              proporcionando respuestas rápidas mediante aprobaciones o
              rechazos. Los usuarios reciben verificaciones por correo
              electrónico y notificaciones de aprobación o rechazo, junto con
              instrucciones. Además, ofrece una opción para restablecer la
              contraseña en caso de olvido.
            </p>
            <p>Para probar la aplicación puedes utilizar este usuario.</p>
            <p>Email:devjuancode@gmail.com</p>
            <p>Password:123456</p>
            <p>Rol:admin</p>
            <p className="mt-2">Está desarrollado con Nextjs.</p>

            <p className="mt-2">
              Tecnología y herramientas utilizadas en el proyecto:
            </p>
            <div className=" w-full flex justify-center sm:justify-start">
              <BiLogoTypescript className=" text-blue-700 text-2xl" />
              <TbBrandNextjs className=" text-white text-2xl" />
              <SiTailwindcss className=" text-cyan-500 text-2xl" />
              <SiMongodb className=" text-green-500 text-2xl" />
            </div>
            <div className="cursor-pointer mt-4 ">
              <Link
                target="_blank"
                href="https://gestordepermisos.vercel.app/"
                className="z-30 inline-flex background-shine bg-[linear-gradient(110deg,#939393,45%,#232323,55%,#939393)] hover:bg-[linear-gradient(110deg,#4a40ae,45%,#ffff,55%,#4a40ae)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent"
              >
                Ver sitio web
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse  sm:flex-row justify-center items-center">
          <div className="text-white text-balance text-center sm:text-right sm:w-[30rem]">
            <p>
              InvoiceYou surgió de una experiencia personal. Después de realizar
              una compra en una ferretería y no recibir una factura porque el
              dueño se había quedado sin talonarios, nació la idea de crear una
              aplicación de facturación. Así fue como nació la inspiración para
              InvoiceYou.
            </p>
            <p className="sm:text-right">Está desarrollado con ReactJs.</p>

            <p className="mt-4">
              Tecnología y herramientas utilizadas en el proyecto:
            </p>
            <div className=" w-full flex justify-center sm:justify-end">
              <RiJavascriptFill className=" text-yellow-400 text-2xl" />
              <FaReact className=" text-blue-700 text-2xl" />
              <SiTailwindcss className=" text-cyan-500 text-2xl" />
              <FaFilePdf className=" text-red-700 text-2xl" />
            </div>
            <div className="cursor-pointer mt-4 sm:text-right">
              <Link
                target="_blank"
                href="https://invoiceyouu.netlify.app/"
                className="z-30 inline-flex background-shine bg-[linear-gradient(110deg,#939393,45%,#232323,55%,#939393)] hover:bg-[linear-gradient(110deg,#4a40ae,45%,#ffff,55%,#4a40ae)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent"
              >
                Ver sitio web
              </Link>
            </div>
          </div>
          <Image width={500} src={Invoice} alt="img-projects" />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center">
          <Image width={500} src={UiLinearGradients} alt="img-projects" />
          <div className=" text-white text-balance text-center sm:text-left sm:w-[30rem]">
            <p className="">
              Ui-LinearGradient es una aplicación web que genera fondos con el
              estilo que más te gusta. Explora toda la gama de colores para
              crear tu diseño.
            </p>

            <p className="mt-4">
              Tecnología y herramientas utilizadas en el proyecto:
            </p>
            <div className=" w-full flex  ">
              <RiJavascriptFill className=" text-yellow-400 text-2xl" />
              <FaReact className=" text-blue-700 text-2xl" />
              <FaSass className=" text-pink-400 text-2xl" />
            </div>

            <div className="cursor-pointer mt-4 ">
              <Link
                target="_blank"
                href="https://ui-lineargradient.netlify.app/"
                className="z-30 inline-flex background-shine bg-[linear-gradient(110deg,#939393,45%,#232323,55%,#939393)] hover:bg-[linear-gradient(110deg,#4a40ae,45%,#ffff,55%,#4a40ae)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent"
              >
                Ver sitio web
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
