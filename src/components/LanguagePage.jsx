import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import CodingExperiencePage from "./CodingExperiencePage";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import PhoneNumberPage from "./PhoneNumberPage";

export default function LanguagePage() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [showCodingExperiencePage, setShowCodingExperiencePage] =
    useState(false);
  const [showPhoneNumberPage, setShowPhoneNumberPage] = useState(false);

  const goToCodingExperiencePage = () => {
    setShowCodingExperiencePage(true);
  };

  const goToPhoneNumberPage = () => {
    setShowPhoneNumberPage(true);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguages((prevSelected) =>
      prevSelected.includes(language)
        ? prevSelected.filter((lang) => lang !== language)
        : [...prevSelected, language]
    );
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div>
      {showCodingExperiencePage ? (
        <CodingExperiencePage />
      ) : showPhoneNumberPage ? (
        <PhoneNumberPage />
      ) : (
        <div className="flex flex-col w-full md:flex-row pt-[80px] pr-[55px] items-center justify-center">
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
              ].map((language, index) => (
                <label
                  key={language}
                  className={`flex items-center text-xl text-[#cf9fff] bg-[#faf5ff] border border-[#cf9fff] rounded-md p-2 hover:bg-[#f1e2ff] cursor-pointer ${
                    selectedLanguages.includes(language)
                      ? "bg-[#cf9fff] border-[#aa72e3]"
                      : ""
                  }`}
                  onClick={() => handleLanguageChange(language)}
                >
                  <span className="text-sm border border-[#cf9fff] rounded-sm mr-2 px-[5px] bg-white">
                    <span
                      className={
                        selectedLanguages.includes(language)
                          ? " text-white bg-[#aa72e3]"
                          : ""
                      }
                    >
                      {alphabet[index]}
                    </span>
                  </span>
                  <span className="ml-1">{language}</span>
                </label>
              ))}
            </div>

            <div className="flex items-center mt-4">
              <button
                onClick={goToCodingExperiencePage}
                className="bg-[#cf9fff] hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 font-bold text-xl"
              >
                OK
              </button>
            </div>
          </div>

          {/*Footer */}
          <div className="fixed bottom-0 right-0 flex items-center w-full justify-end p-4">
            <button
              className="text-white font-bold hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-l-md"
              onClick={goToPhoneNumberPage}
            >
              <SlArrowUp className="h-4 w-6" />
            </button>
            <div className="border-r-[1.5px] border-[#aa72e3] h-8"></div>
            <button
              className="text-white hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-r-md"
              onClick={goToCodingExperiencePage}
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
