import Image from "next/image";
import test from "../../public/test.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-full sm:h-[100vh] flex flex-col sm:flex-row justify-center items-center text-white"
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
            JavaScript Frontend Developer with experience in ReactJS.
          </p>
          <p>
            I am ready to apply my skills and passion with the purpose of
            driving the mission of a project. My positive attitude, along with
            my willingness and motivation to acquire new technologies, set me
            apart. I have worked on projects using technologies such as
            JavaScript, React, Next.js, Redux, Node.js, MongoDB, Firebase, and
            Supabase. My perseverance and passion drive me to complete tasks to
            their culmination. These qualities have allowed me to develop
            problem-solving skills during web application development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
