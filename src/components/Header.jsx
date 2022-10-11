import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="bg-blue-200 px-4 py-2 mx-auto">
      <nav className="w-full">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link
                to="/"
                aria-label="Grand Quiz"
                title="Grand Quiz"
                className="inline-flex items-center"
              >

                <span className="ml-2 text-2xl font-bold tracking-wide text-blue-800 uppercase">
                  Grand Quiz
                </span>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li>
                  <Link
                    to="/home"
                    aria-label="Home"
                    title="Home"
                    className="font-bold text-xl tracking-wide text-gray-900 transition-colors duration-200 hover:text-purple-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quizzes"
                    aria-label="Quizzes"
                    title="Quizzes"
                    className="font-bold text-xl tracking-wide text-gray-900 transition-colors duration-200 hover:text-purple-500"
                  >
                    Quizzes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/overview"
                    aria-label="Overview"
                    title="Overview"
                    className="font-bold text-xl tracking-wide text-gray-900 transition-colors duration-200 hover:text-purple-500"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    aria-label="Blogs"
                    title="Blogs"
                    className="font-bold text-xl tracking-wide text-gray-900 transition-colors duration-200 hover:text-purple-500"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Header;
