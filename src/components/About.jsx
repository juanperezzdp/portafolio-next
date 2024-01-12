import Image from "next/image";
import test from "../../public/test.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-[100vh] flex flex-col sm:flex-row justify-center items-center text-white"
    >
      <div className="gap-8 w-[80%] flex flex-col justify-center items-center sm:flex-row">
        <div className="relative h-60 w-60 sm:h-80 sm:w-80 overflow-hidden rounded-full border border-slate-800 p-[1px] backdrop-blur-3xl">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
          <div className="overflow-hidden inline-flex h-full w-full items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <Image
              className=" w-40 sm:w-[12.5rem]"
              width={200}
              src={test}
              alt="photo"
            />
          </div>
        </div>

        <div className="text-center sm:text-left w-full sm:w-[30rem]">
          <h2 className="text-[2rem] sm:text-[3.5rem]">Developer Web</h2>
          <p className="mb-4">
            Desarrollador de Frontend JavaScript con experiencia en ReactJS.
          </p>
          <p>
            Estoy preparado para aplicar mis habilidades y pasión con el
            propósito de impulsar la misión de un proyecto. Mi actitud positiva,
            junto con mi voluntad y motivación para adquirir nuevas tecnologías,
            me distinguen. He trabajado en proyectos utilizando tecnologías como
            JavaScript, React, Nextjs Redux, Nodejs, MongoDB, Firebase y
            Supabase. Mi perseverancia y pasión me impulsan a completar tareas
            hasta su culminación. Estas cualidades han permitido que desarrolle
            habilidades para resolver problemas durante el desarrollo de
            aplicaciones web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
