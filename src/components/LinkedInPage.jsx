import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import CompletePage from "./CompletePage";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export default function LinkedInPage() {
  const [linkedinURL, setLinkedinURL] = useState("");
  const [showCompletePage, setShowCompletePage] = useState(false);

  const goToCompletePage = () => {
    setShowCompletePage(true);
  };

  const handleURLChange = (event) => {
    setLinkedinURL(event.target.value);
  };

  return (
    <div>
      {showCompletePage ? (
        <CompletePage />
      ) : (
        <div className="flex flex-col w-full md:flex-row pt-[180px] pr-[30px] items-center justify-center relative">
          <div className="w-full max-w-3xl md:pr-5 mb-9">
            <h1 className="font-Lexe text-2xl mb-2 text-[#191b3a] flex items-center">
              <span className="text-[#cf9fff] text-sm mr-2">9</span>
              <IoIosArrowRoundForward className="text-[#cf9fff] mr-2 text-sm inline-block" />
              LinkedIn URL (optional)
            </h1>

            <p className="text-gray-500 text-xl mb-4 ml-[2rem]">
              Here's a snipper link to make your life easy -
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                linkedin.com
              </a>
              &nbsp; (It'll open in a new tab) 🚀
            </p>

            <input
              type="text"
              value={linkedinURL}
              onChange={handleURLChange}
              className="border-b border-[#cf9fff] text-[#cf9fff] rounded-none px-4 py-2 w-full focus:outline-none placeholder-[#f1e2ff] text-3xl caret-[#cf9fff] ml-[2rem]"
              placeholder="Type your answer here..."
            />

            <div className="flex items-center mt-4 ml-[2rem]">
              <button
                onClick={goToCompletePage}
                className={`bg-[#cf9fff] hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 font-bold text- cursor-pointer text-xl`}
                disabled={linkedinURL.trim() === ""}
              >
                Submit
              </button>
              <span className="ml-4 text-xs text-[#191b33]">
                press Ctrl + Enter ↵
              </span>
            </div>
          </div>

          <div className="fixed bottom-4 right-4 flex items-center">
            <button className="text-white font-bold hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-l-md">
              <SlArrowUp className="h-4 w-6" />
            </button>
            <div className="border-r-[1.5px] border-[#aa72e3] h-8"></div>
            <button className="text-white hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-r-md">
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
