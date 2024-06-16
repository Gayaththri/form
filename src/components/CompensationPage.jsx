import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import compensationImage from "../assets/compensation.png";
import StatementPage from "./StatementPage";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export default function CompensationPage() {
  const [selectedCompensation, setSelectedCompensation] = useState("");
  const [showStatementPage, setShowStatementPage] = useState(false);

  const goToStatementPage = () => {
    setShowStatementPage(true);
  };

  const handleCompensationChange = (compensation) => {
    setSelectedCompensation(compensation);
  };

  return (
    <div>
      {showStatementPage ? (
        <StatementPage />
      ) : (
        <div className="flex flex-col w-full md:flex-row pt-[90px] pr-[55px] items-center justify-center relative pl-10">
          <div className="w-full max-w-2xl md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="font-Lexe text-2xl mb-4 text-[#191b3a] flex items-center">
              <span className="text-[#cf9fff] text-sm pb-8">7 </span>
              <IoIosArrowRoundForward
                className="text-[#cf9fff] size-6 mr-2 relative"
                style={{ top: "-15px" }}
              />
              What is your current annual compensation? (Optional)
            </h1>

            <p className="text-gray-500 text-xl mb-4 pl-10">
              Disclaimer: The information provided regarding salary will be kept
              confidential and will not be used as a determining factor for
              acceptance into the bootcamp. It will be used exclusively for
              career advancement guidance.
            </p>

            <div className="grid grid-cols-1 gap-2 w-[45%] pl-10">
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
                  className={`flex items-center text-xl text-[#cf9fff] bg-[#faf5ff] border border-[#cf9fff] rounded-md px-2 py-1 hover:bg-[#f1e2ff] cursor-pointer ${
                    selectedCompensation === option.id
                      ? "bg-[#cf9fff] border-[#aa72e3]"
                      : ""
                  }`}
                  onClick={() => handleCompensationChange(option.id)}
                >
                  <span className="text-sm border border-[#cf9fff] rounded-sm mr-2 px-[5px] bg-white">
                    <span
                      className={
                        selectedCompensation === option.id
                          ? "text-white bg-[#aa72e3]"
                          : ""
                      }
                    >
                      {option.id}
                    </span>
                  </span>
                  <span className="ml-1">{option.text}</span>
                </label>
              ))}
            </div>

            <div className="flex items-center mt-4 pl-10">
              <button
                onClick={goToStatementPage}
                className="bg-[#cf9fff] text-xl hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 font-bold"
              >
                OK
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={compensationImage}
              alt="Compensation"
              className="w-full md:w-3/4 object-cover"
            />
          </div>

          <div className="fixed bottom-4 right-4 flex items-center">
            <button className="text-white font-bold hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-l-md">
              <SlArrowUp className="h-4 w-6" />
            </button>
            <div className="border-r-[1.5px] border-[#aa72e3] h-8"></div>
            <button
              className="text-white hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-r-md"
              onClick={goToStatementPage}
            >
              <SlArrowDown className="h-4 w-6 font-extrabold" />
            </button>
            <a
              href="https://www.typeform.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#d6adff] transition-colors duration-300 px-4 py-2 bg-[#cf9fff] rounded-md ml-2"
            >
              Powered by TypeForm
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
