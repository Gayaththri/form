import { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowRoundForward,
  IoIosArrowUp,
} from "react-icons/io";
import PropTypes from "prop-types";

export default function StatementPage({ onNextPage }) {
  const [accepted, setAccepted] = useState(null);

  const handleAcceptanceChange = (acceptance) => {
    setAccepted(acceptance);
  };

  const handleNext = () => {
    onNextPage(accepted);
  };

  return (
    <div className="flex flex-col md:flex-row p-[80px] items-center justify-center relative">
      <div className="w-full max-w-3xl md:pr-5 mr-14 mb-10">
        <div className="flex items-center mb-4">
          <span className="text-[#cf9fff] text-xl mr-2">8</span>
          <IoIosArrowRoundForward className="text-[#cf9fff] text-xl mr-4" />
          <h1 className="font-Lexe text-2xl text-[rgb(25,27,58)]">
            Certifying Statement*
          </h1>
        </div>

        <p className="text-gray-500 text-xl mb-8 ml-[3.5rem]">
          I hereby acknowledge that this application form was completed by me
          (the individual seeking to enroll in Metana) and I did not receive
          help from any external sources. The responses submitted are entirely
          my own and based on my own reasoning. Also, I opt in to receive
          communication messages from Metana about my application.
        </p>

        <div className="grid grid-cols-1 gap-4 text-xl ml-[3.5rem]">
          {[
            {
              id: "A",
              text: "I accept",
            },
            {
              id: "B",
              text: "I don’t accept",
            },
          ].map((option) => (
            <label
              key={option.id}
              className={`flex items-center text-[#cf9fff] mb-1 border border-[#cf9fff] rounded-md p-2 cursor-pointer ${
                accepted === (option.id === "A") ? "bg-[#cf9fff]" : ""
              }`}
              onClick={() => handleAcceptanceChange(option.id === "A")}
            >
              <span>{option.text}</span>
            </label>
          ))}
        </div>

        <div className="flex items-center mt-4 ml-[3.5rem]">
          <button
            onClick={handleNext}
            className={`bg-[#cf9fff] hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 font-bold ${
              accepted !== null ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={accepted === null}
          >
            OK
          </button>
        </div>
      </div>

      <div className="absolute bottom-[-20px] right-4 flex items-center">
        <button
          className="text-white hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-l-lg"
          onClick={() => window.scrollTo(0, 0)}
        >
          <IoIosArrowUp className="h-5 w-6" />
        </button>
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

StatementPage.propTypes = {
  onNextPage: PropTypes.func.isRequired,
};
