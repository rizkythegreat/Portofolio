import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-2xl mt-20">Hi Guys, My Name is Rizky Rahman Salam.</p>
        <p className="text-xl mt-20">
        I am a junior fullstack developer currently studying at STMIK Amik Riau. I possess expertise in technologies such as Tailwind, React, and Node. I am always eager to learn and develop myself in the programming field to achieve success in my career.
        </p>

        <br />

        <p className="text-xl">
        In addition to my technical expertise, I possess strong soft skills that allow me to effectively communicate and collaborate with colleagues and clients. I am adaptable, creative, and possess excellent problem-solving abilities, enabling me to deliver projects on time and exceed expectations. I am dedicated to delivering exceptional results while fostering a positive team environment.
        </p>
      </div>
    </div>
  );
};

export default About;
