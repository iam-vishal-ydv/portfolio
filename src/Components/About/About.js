import React from "react";
import heroImage from "../../assets/about.jpg";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";

export const About = () => {
  return (
    <>
      <section className="text-gray-600 body-font" name="about">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center   justify-around ">
          <div
            className="lg:max-w-sm    lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0  flex justify-center  border-t-[12px]  border-l-[12px] border-white shadow-md shadow-orange-500   "
            data-aos="zoom-in-down"
          >
            <img
              className="object-cover object-center  p-5   "
              alt="hero"
              src={heroImage}
            />
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 gap-y-5 flex flex-col md:items-start md:text-left items-center text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-white  animate-bounce">
              {" "}
              Vishal Yadav
            </h1>
            <h3 className="text-white text-2xl ">
              {" "}
              Front<span className="text-orange-600  font-semibold text-3xl ">
                {" "}
                End
              </span>{" "}
              Developer{" "}
            </h3>

            <p  className="text-gray-300  md:text-sm">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions. Check out my Portfolio
            </p>

            <div className=" md:flex  md:flex-col gap-y-2  ">
              <div className=" md:flex  flex flex-col  gap-6    text-gray-400 text-sm justify-center  capitalize ">
                <div className="flex gap-x-6  ml-4 ">
                  {" "}
                  <span className="text-lg text-white -ml-2">Birthday</span>
                  &nbsp;  |
                     <span className="md:text-base" > 1th fab 2001</span>
                </div>
                <div className="flex ">
                  <span className=" text-white ml-2 text-lg md:text-base md:mt-4  ">email</span>
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; |
                  <span className="text-xs md:text-[14px] "> &nbsp; &nbsp; vishalyadav122001@gmail.com</span>
                </div>
              </div>

              <div className=" md:flex  gap-6 text-gray-400  capitalize   flex flex-col text-sm ">
                <div className="flex gap-3 ml-2 mt-3">
           
                  <span className="text-lg text-white">age</span>   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;  |   <span className="md:text-base" > &nbsp;&nbsp; 23 &nbsp;years</span>
                </div>
                <div className="flex gap-3 ">
                  <span className="text-lg text-white">  phone no</span>{" "}
                  &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp;  <span className="md:text-base">  8445406165</span> 
                </div>
              </div>
            </div>

            <div className="flex  gap-x-16 mt-4 text-3xl  ml-16  md:ml-0 w-full text-white  ">
        
              <span className="hover:scale-150 cursor-pointer duration-300  hover:ease-in-out  rounded-full hover:rotate-[360deg]  hover:text-orange-500 hover:shadow-lg shadow-cyan-500/50 ">
                <BsGithub   />{" "}
              </span>{" "}
              <span>
                {" "}
                <ImLinkedin className="hover:scale-150 cursor-pointer duration-300  hover:ease-in-out hover:rotate-[360deg]  hover:text-blue-500 " />
              </span>{" "}
              <span>
                {" "}
                <BsInstagram className="hover:scale-150 cursor-pointer duration-300 hover:ease-in-out hover:rotate-[360deg]  hover:text-pink-600 " />
              </span>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
