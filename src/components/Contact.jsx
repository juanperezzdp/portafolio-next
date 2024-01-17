"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Email and subject sent successfully!");
      } else {
        alert("Failed to send email and subject");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <section
      id="contact"
      className="w-full h-[100vh] flex justify-center items-center"
    >
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="w-64 sm:w-80 h-[25rem] absolute">
          <div
            className={`${
              true ? "jumpp" : ""
            } absolute -left-12 -top-12 h-28 w-28 sm:h-40 sm:w-40 rounded-full bg-gradient-to-br from-violet-700 to-teal-500`}
          ></div>

          <div
            className={`${
              true ? "jump" : ""
            } absolute transition-all duration-500 -bottom-12 -right-12 h-28 w-28 sm:h-40 sm:w-40 rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600`}
          ></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="gap-1 p-4 flex flex-col justify-center items-center  text-white shadow-form w-72 sm:w-80 h-[28rem]  bg-opacity-10 bg-white absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl backdrop-blur-md border-2 border-black border-opacity-10 p-50 "
          >
            <h3 className="text-2xl">Contact Me</h3>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                className="focus:bg-white focus:bg-opacity-40 w-[14.5rem] appearance-none placeholder-white resize-none focus:outline-none rounded-lg p-2 bg-opacity-40 bg-white"
                placeholder="example@gmail.com"
              />
              <div className="w-full h-6 text-sm">
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="issue">Issues</label>
              <textarea
                {...register("issue", { required: "Issue is required" })}
                className="h-40 placeholder-white resize-none focus:outline-none rounded-lg p-2 w-[14.5rem] bg-opacity-40 bg-white"
                placeholder="Write to the subject"
              ></textarea>

              <div className="w-full h-6 text-sm">
                {errors.issue && (
                  <p className="text-red-500">{errors.issue.message}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="cursor-pointer w-[14.5rem]  h-10 text-sm  text-white  rounded-lg bg-blue-950 hover:bg-blue-900 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-700 hover:scale-105 transition-transform duration-500 ease-in-out flex justify-center items-center font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
