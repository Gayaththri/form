import { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowRoundForward,
  IoIosArrowUp,
} from "react-icons/io";
import PropTypes from "prop-types";

export default function LinkedInPage({ onNextPage }) {
  const [linkedinURL, setLinkedinURL] = useState("");

  const handleURLChange = (event) => {
    setLinkedinURL(event.target.value);
  };

  const handleNext = () => {
    onNextPage(linkedinURL);
  };

  return (
    <div className="flex flex-col md:flex-row p-[80px] items-center justify-center relative">
      <div className="w-full max-w-3xl md:pr-5 mr-14 mb-9">
        <h1 className="font-Lexe text-2xl mb-4 text-[#191b3a] flex items-center">
          <span className="text-[#cf9fff] text-sm">9 </span>
          <IoIosArrowRoundForward className="text-[#cf9fff] mr-2 text-sm inline-block" />
          LinkedIn URL (optional)
        </h1>

        <p className="text-gray-500 text-xl mb-4">
          Heres a sniper link to make your life easy -
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin.com
          </a>
          (Itll open in a new tab) 🚀
        </p>

        <input
          type="text"
          value={linkedinURL}
          onChange={handleURLChange}
          className="border-b-[#cf9fff] text-[#cf9fff] border-b border-[#8000ff] rounded-none px-4 py-2 w-full focus:outline-none placeholder-[#f1e2ff] text-3xl caret-[#cf9fff]"
          placeholder="Type your answer here..."
        />

        <div className="flex items-center mt-4">
          <button
            onClick={handleNext}
            className={`bg-[#cf9fff] hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 font-bold text-xl ${
              linkedinURL.trim() ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!linkedinURL.trim()}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="absolute bottom-[-180px] right-4 flex items-center">
        <button
          className="text-white hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-l-lg"
          onClick={() => window.scrollTo(0, 0)}
        >
          <IoIosArrowUp className="h-5 w-6" />
        </button>
        <div className="w-full h-px bg-[#cf9fff] my-1"></div>
        <button
          className="text-white hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-r-lg"
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
        >
          <IoIosArrowDown className="h-5 w-6" />
        </button>
      </div>
    </div>
  );
}

LinkedInPage.propTypes = {
  onNextPage: PropTypes.func.isRequired,
};
