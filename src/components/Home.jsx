import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../bg-img.jpg";

const Home = () => {
  return (
    <section>
      <div style={{ backgroundImage: `url(${bgImg})` }} className="opacity-70">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto 
        text-center lg:pb-56 md:py-32 md:px-10 lg:px-32">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">
            Welcome To Grand Quiz
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-yellow-50">
            The best platform for check your knowledge and learn more about those subject.
            Be happy for your life!!!!!
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to="/quizzes">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded-full text-yellow-100 hover:bg-cyan-800 bg-cyan-600"
              >
                Quizzes
              </button>
            </Link>
            <Link to="/overview">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 text-white"
              >
                Overview
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Home;
