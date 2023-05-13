import React from "react";
import modelImage from "../../assets/pic.jpg";

export const Home = () => {
  return (
    <>
      <section className=" body-font bg-gradient-to-b from-black   " name="home">
        <div className="  container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center  ">
          <div className="  -mb-32  sm:-mb-24  lg:flex-grow md:w-1/2  absolute    lg:relative md:relative lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mt-16 md:mb-0 items-center text-center sm:absolute " >
            <h1 className="title-font sm:text-3xl    mb-4 lg:text-6xl  text-4xl  text-white font-sans font-bold">
              Vishal yadav
            </h1>
            <h4 className=" py-2  text-2xl text-orange-400  md:text-2xl font-semibold  animate-typing overflow-hidden whitespace-nowrap border-r-1 border-r-white pr-5   ">
              Web Developer
            </h4>
            <p className="mb-8 leading-relaxed  text-white w-96">
              {" "}
              I design and code beautifully simple things, <br></br> and   I love what I do
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white uppercase  hover:skew-y-6  font-medium font-sans bg-orange-400 border-0 py-2 px-6 focus:outline-none transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...rounded text-lg">
                 download cv
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 "  >
            <img
              className="object-cover object-center  rounded-2xl   "
              alt="hero"
              src={modelImage}
            />
          </div>
        </div>
      </section>
    </>
  );
};
