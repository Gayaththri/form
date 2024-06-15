import { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowRoundForward,
  IoIosArrowUp,
} from "react-icons/io";
import PropTypes from "prop-types";
import compensationImage from "../assets/compensation.png";

export default function CompensationPage({ onNextPage }) {
  const [selectedCompensation, setSelectedCompensation] = useState("");

  const handleCompensationChange = (compensation) => {
    setSelectedCompensation(compensation);
  };

  const handleNext = () => {
    onNextPage(selectedCompensation);
  };

  return (
    <div className="flex flex-col md:flex-row p-[100px] items-center justify-center relative">
      <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h1 className="font-Lexe text-2xl mb-4 text-[#191b3a] flex items-center">
          <span className="text-[#cf9fff] text-sm">7 </span>
          <IoIosArrowRoundForward className="text-[#cf9fff] mr-2 text-sm inline-block" />
          What is your current annual compensation? (Optional)
        </h1>

        <p className="text-gray-500 text-xl mb-4">
          Disclaimer: The information provided regarding salary will be kept
          confidential and will not be used as a determining factor for
          acceptance into the bootcamp. It will be used exclusively for career
          advancement guidance.
        </p>

        <div className="grid grid-cols-1 gap-4">
          {[
            {
              id: "A",
              text: "<$30,000",
            },
            {
              id: "B",
              text: "$30,000 - $50,000",
            },
            {
              id: "C",
              text: "$50,000 - $80,000",
            },
            {
              id: "D",
              text: "$80,000 - $120,000",
            },
            {
              id: "E",
              text: "$120,000 - $250,000",
            },
            {
              id: "F",
              text: "$250,000 or more",
            },
          ].map((option) => (
            <label
              key={option.id}
              className={`flex items-center text-[#cf9fff] mb-1 border border-[#cf9fff] rounded-md p-2 cursor-pointer ${
                selectedCompensation === option.id ? "bg-[#cf9fff]" : ""
              }`}
              onClick={() => handleCompensationChange(option.id)}
            >
              <span>{option.text}</span>
            </label>
          ))}
        </div>

        <div className="flex items-center mt-4">
          <button
            onClick={handleNext}
            className={`bg-[#cf9fff] hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 font-bold ${
              selectedCompensation ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!selectedCompensation}
          >
            OK
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-full relative">
        <img
          src={compensationImage}
          alt="Compensation"
          className="h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 flex items-center space-x-2">
          <button
            className="text-white hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-md"
            onClick={() => window.scrollTo(0, 0)}
          >
            <IoIosArrowUp className="h-5 w-6" />
          </button>
          <button
            className="text-white hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-md"
            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
          >
            <IoIosArrowDown className="h-5 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

CompensationPage.propTypes = {
  onNextPage: PropTypes.func.isRequired,
};
