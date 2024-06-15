import { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowRoundForward,
  IoIosArrowUp,
} from "react-icons/io";
import CompensationPage from "./CompensationPage";

export default function CodingExperiencePage() {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [showCompensationPage, setShowCompensationPage] = useState(false);

  const goToCompensationPage = () => {
    setShowCompensationPage(true);
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  return (
    <div>
      {showCompensationPage ? (
        <CompensationPage />
      ) : (
        <div className="flex flex-col w-full md:flex-row p-[100px] items-center justify-center relative">
          <div className="w-full max-w-2xl md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="font-Lexe text-2xl mb-4 text-[#191b3a] flex items-center">
              <span className="text-[#cf9fff] text-sm">6 </span>
              <IoIosArrowRoundForward className="text-[#cf9fff] mr-2 text-sm inline-block" />
              How would you describe your current level of coding experience?
            </h1>

            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  id: "A",
                  text: "No experience (I have never programmed before.)",
                },
                {
                  id: "B",
                  text: "Beginner (I have played with some introductory coding lessons and tutorials.)",
                },
                {
                  id: "C",
                  text: "Intermediate (I have completed some coding classes or tutorials.)",
                },
                { id: "D", text: "Advanced (I can build applications.)" },
                {
                  id: "E",
                  text: "Professional (I am an experienced software engineer.)",
                },
              ].map((option) => (
                <label
                  key={option.id}
                  className={`flex items-center text-[#cf9fff] mb-1 border border-[#cf9fff] rounded-md p-2 cursor-pointer ${
                    selectedLevel === option.id ? "bg-[#cf9fff]" : ""
                  }`}
                  onClick={() => handleLevelChange(option.id)}
                >
                  <span>{option.text}</span>
                </label>
              ))}
            </div>

            <div className="flex items-center mt-4">
              <button
                onClick={goToCompensationPage}
                className={`bg-[#cf9fff] hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 font-bold ${
                  selectedLevel ? "" : "opacity-50 cursor-not-allowed"
                }`}
                disabled={!selectedLevel}
              >
                OK
              </button>
            </div>
          </div>

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
      )}
    </div>
  );
}
