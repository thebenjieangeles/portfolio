import React from "react";
import benjie from "../images/benjie.jpg";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-12">
      <div className="bg-secondary w-56 rounded-full shadow-lg overflow-clip transition-all hover:bg-header">
        <img
          src={benjie}
          alt="photo of the benjie"
          className="w-56 rounded-full "
        />
      </div>

      <div>
        {" "}
        <h1 className="text-4xl md:text-7xl mb-1 mb:mb-3 font-bold pt-12">
          Benjie Angeles
        </h1>
        <p className="text-base md:text-3xl mb-3 font-medium pt-8">
          Full-stack Web Developer
        </p>
        <p className="text-base md:text-xl mb-3 font-medium pt-8 max-w-xl">
          With a solid foundation in the BPO industry, I am now determined to
          forge a successful path in web development. Equipped with strong
          communication, creative thinking, and analytical abilities, I bring a
          unique set of skills to the table. Proficient in HTML, CSS, and
          JavaScript, I have a passion for designing and building intuitive,
          user-friendly websites.
        </p>
        <p className="text-base md:text-xl mb-3 font-medium pt-8 max-w-xl">
          Additionally, my experience in problem-solving and troubleshooting
          enables me to efficiently navigate challenges in the development
          process. As a collaborative team player, I am committed to delivering
          high-quality results, always paying meticulous attention to detail.
        </p>
      </div>
    </div>
  );
}

export default Intro;
