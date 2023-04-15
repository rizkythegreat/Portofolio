import React from "react";
import todoapp from "../assets/portfolio/porto_1.png";
import installNode from "../assets/portfolio/installNode.jpg";
import svelteTodo from "../assets/portfolio/svelteTodo.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import contactMe from "../assets/portfolio/contact_me.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      linkDemo: "https://react-todo-app-rizkythegreat.vercel.app/",
      linkProject: "https://github.com/rizkythegreat/react-todoApp",
      src: todoapp,
    },
    {
      id: 2,
      linkDemo: "https://weather-app-rizkythegreat.vercel.app/",
      linkProject: "https://github.com/rizkythegreat/weather-app",
      src: reactWeather,
    },
    {
      id: 3,
      linkDemo: "https://svelte-todo-app-eight.vercel.app/",
      linkProject: "https://github.com/rizkythegreat/svelte-todo-app",
      src: svelteTodo,
    },
    {
      id: 4,
      linkDemo: "https://eky-link-tree.vercel.app/",
      linkProject: "https://github.com/rizkythegreat/svelte-contact-me",
      src: contactMe,
    },
    {
      id: 5,
      linkDemo: "",
      linkProject: "",
      src: installNode,
    },
    {
      id: 6,
      linkDemo: "",
      linkProject: "",
      src: reactParallax,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, linkDemo, linkProject }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={linkDemo}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={linkProject}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
