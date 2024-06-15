import { useState } from "react";
import EmailPage from "./EmailPage";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export default function NamePage() {
  const [showEmailPage, setShowEmailPage] = useState(false);

  const goToEmailPage = () => {
    setShowEmailPage(true);
  };

  return (
    <div>
      {showEmailPage ? (
        <EmailPage />
      ) : (
        <div className="flex flex-col w-full md:flex-row pt-[150px] pr-[40px] items-center justify-center">
          <div className="w-full max-w-2xl mb-2 md:mb-0">
            <h1 className="font-Lexe text-2xl mb-8 text-[#191b3a]">
              <span className="text-[#cf9fff] text-sm mr-1">1</span>
              <IoIosArrowRoundForward className="text-[#cf9fff] mr-2 text-sm inline-block size-6" />
              Before we start, what is your name?
            </h1>
            <div className="mb-4 ml-[3rem]">
              <label
                htmlFor="firstName"
                className="block text-[#cf9fff] mb-1 border-b-[#cf9fff]"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Jane"
                name="firstName"
                className="border-b-[#cf9fff] text-[#cf9fff] border-b border-[#8000ff] rounded-none px-4 py-2 w-full focus:outline-none placeholder-[#f1e2ff] text-2xl caret-[#cf9fff] mb-7"
              />
            </div>
            <div className="mb-4 ml-[3rem]">
              <label
                htmlFor="lastName"
                className="block text-[#cf9fff] mb-1 border-b-[#cf9fff]"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Smith"
                name="lastName"
                className="border-b-[#cf9fff] text-[#cf9fff] border-b border-[#cf9fff] rounded-none px-4 py-2 w-full focus:outline-none placeholder-[#f1e2ff] text-2xl caret-[#cf9fff] mb-7"
              />
            </div>

            <div className="flex items-center space-x-4 ml-[3.5rem]">
              <button className="bg-[#cf9fff] hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 font-bold">
                OK
              </button>
              <p className="text-xs text-[#191b33]">press Enter ↵</p>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center">
            <button className="text-white p-2 bg-[#cf9fff] rounded-l-lg pointer-events-none">
              <SlArrowUp className="h-4 w-6" />
            </button>
            <div className="border-r-[1.5px] border-[#aa72e3] h-8"></div>
            <button
              className="text-white hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-r-md"
              onClick={goToEmailPage}
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
