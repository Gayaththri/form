import { useState } from "react"; 
import CountryPage from "./CountryPage";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowRoundForward,
} from "react-icons/io";

export default function EmailPage() {
  const [showCountryPage, setShowCountryPage] = useState(false);

  const goToCountryPage = () => {
    setShowCountryPage(true); 
  };

  return (
    <div>
      {showCountryPage ? ( 
        <CountryPage />
      ) : (
        <div className="flex flex-col w-full md:flex-row p-[100px] items-center justify-center">
          <div className="w-full max-w-2xl md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="font-Lexe text-2xl mb-4 text-[#191b3a] flex items-center">
              <span className="text-[#cf9fff] text-sm">2 </span>
              <IoIosArrowRoundForward className="text-[#cf9fff] mr-2 text-sm inline-block" />
              Whats your email address?
            </h1>
            <p className="text-gray-500 text-xl mb-4">
              This is how well contact you.
            </p>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                name="email"
                className="border-b-[#cf9fff] text-[#cf9fff] border-b border-[#8000ff] rounded-none px-4 py-2 w-full focus:outline-none placeholder-[#f1e2ff] text-2xl caret-[#cf9fff]"
              />
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-[#cf9fff] hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 font-bold">
                OK
              </button>
              <p className="mt-4 text-sm text-gray-500">press Enter ↵</p>
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
              onClick={goToCountryPage}
            >
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
      )}
    </div>
  );
}
