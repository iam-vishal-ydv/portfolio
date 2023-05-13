import React from "react";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import css from "../../assets/css.png";

export const Experience = () => {
  const tech = [
    {
      id: 1,
      img: html,
      title: "html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      img: css,
      title: "css",
      style: "shadow-blue-500",
    },

    {
      id: 3,
      img: javascript,
      title: "javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      img: tailwind,
      title: "tailwind",
      style: "shadow-green-500",
    },
    {
      id: 5,
      img: react,
      title: "react",
      style: "shadow-orange-500",
    },
  ];

  return (
    <>
      <div name="experience" className="bg-black w-full h-auto">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full gap-5  text-white">
          <div>
            <p
              className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline
 "
            >
              Experience
            </p>

            <p className="py-6"> These are the technologies I've worked with</p>
          </div>

          <div
            className="w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-8 px-12 sm:px-0 "
            data-aos="fade-left"
          >
            {tech.map(({ id, img, title, style }) => {
              return (
                <React.Fragment key={id}>
                  <div
                    className={`shadow-md hover:scale-105 duration-500 py-2  cursor-pointer rounded-lg ${style}`}
                  >
                    <img src={img} alt="" className="w-20 mx-auto" />
                    <p className="mt-4 text-white">{title} </p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
