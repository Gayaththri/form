/**
 * EmailPage Component - Allows users to input their email address.
 */
import { useState } from "react";
import NamePage from "./NamePage";
import CountryPage from "./CountryPage";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";

export default function EmailPage() {
  const [showCountryPage, setShowCountryPage] = useState(false);
  const [showNamePage, setShowNamePage] = useState(false);

  const goToCountryPage = () => {
    setShowCountryPage(true);
  };

  const goToNamePage = () => {
    setShowNamePage(true);
  };

  return (
    <div>
      {showCountryPage ? (
        <CountryPage />
      ) : showNamePage ? (
        <NamePage />
      ) : (
        <div className="flex flex-col w-full md:flex-row p-[150px] pl-10 items-center justify-center">
          <div className="w-full max-w-2xl md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="font-Lexe text-2xl mb-4 text-[#191b3a] flex items-center">
              <span className="text-[#cf9fff] text-sm">2 </span>
              <IoIosArrowRoundForward className="text-[#cf9fff] mr-2 text-sm inline-block" />
              Whats your email address?
            </h1>
            <p className="text-gray-500 text-xl mb-4 ml-[3rem]">
              This is how well contact you.
            </p>
            <div className="mb-4 ml-[3rem]">
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                name="email"
                className="border-b-[#cf9fff] text-[#cf9fff] border-b border-[#8000ff] rounded-none px-4 py-2 w-full focus:outline-none placeholder-[#f1e2ff] text-2xl caret-[#cf9fff]"
              />
            </div>

            <div className="flex items-center space-x-3 ml-[3rem]">
              <button className="bg-[#cf9fff] hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 font-bold">
                OK
              </button>
              <p className="mt-1 text-xs text-[#191b33]">press Enter ↵</p>
            </div>
          </div>

          {/*Footer */}
          <div className="fixed bottom-0 right-0 flex items-center w-full justify-end p-4">
            <button
              className="text-white font-bold hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-l-md"
              onClick={goToNamePage}
            >
              <SlArrowUp className="h-4 w-6" />
            </button>
            <div className="border-r-[1.5px] border-[#aa72e3] h-8"></div>
            <button
              className="text-white hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-r-md"
              onClick={goToCountryPage}
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
