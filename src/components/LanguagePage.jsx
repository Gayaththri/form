import { useState } from "react";
import PropTypes from "prop-types";
import {
  IoIosArrowDown,
  IoIosArrowRoundForward,
  IoIosArrowUp,
} from "react-icons/io";

export default function LanguagePage({ onNextPage }) {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageChange = (language) => {
    setSelectedLanguages((prevSelected) =>
      prevSelected.includes(language)
        ? prevSelected.filter((lang) => lang !== language)
        : [...prevSelected, language]
    );
  };

  const handleNext = () => {
    onNextPage(selectedLanguages);
  };

  return (
    <div className="flex flex-col w-full md:flex-row p-[100px] items-center justify-center relative">
      <div className="w-full max-w-2xl md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h1 className="font-Lexe text-2xl mb-4 text-[#191b3a] flex items-center">
          <span className="text-[#cf9fff] text-sm">5 </span>
          <IoIosArrowRoundForward className="text-[#cf9fff] mr-2 text-sm inline-block" />
          What languages and frameworks are you familiar with?
        </h1>

        <p className="text-gray-500 text-xl mb-4">
          Select all the languages you know.
        </p>
        <p className="text-[#cf9fff] text-sm mb-4">
          Choose as many as you like
        </p>

        <div className="grid grid-cols-3 gap-4">
          {[
            "Solidity",
            "Rust",
            "Node.js",
            "Typescript",
            "Javascript",
            "C",
            "C++",
            "C#",
            "SQL",
            "Python",
            "Assembly Language",
            "Haskell",
            "R",
            ".NET",
            "Other",
          ].map((language) => (
            <label
              key={language}
              className={`flex items-center text-[#cf9fff] mb-1 border border-[#cf9fff] rounded-md p-2 ${
                selectedLanguages.includes(language) ? "bg-[#cf9fff]" : ""
              }`}
              onClick={() => handleLanguageChange(language)}
            >
              <span className="ml-2">{language}</span>
            </label>
          ))}
        </div>

        <div className="flex items-center mt-4">
          <button
            onClick={handleNext}
            className="bg-[#cf9fff] hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 font-bold"
          >
            OK
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex items-center space-x-2"></div>
      <div className="absolute bottom-4 right-4 flex items-center space-x-2">
        <button
          className="text-white hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-md"
          onClick={() => window.scrollTo(0, 0)}
        >
          <IoIosArrowUp className="h-5 w-6" />
        </button>
        <button className="text-white hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-md">
          <IoIosArrowDown className="h-5 w-6" />
        </button>
        <a
          href="https://www.typeform.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#d6adff] transition-colors duration-300 px-4 py-2 bg-[#cf9fff] rounded-md"
        >
          Powered by TypeForm
        </a>
      </div>
    </div>
  );
}

LanguagePage.propTypes = {
  onNextPage: PropTypes.func.isRequired,
};
