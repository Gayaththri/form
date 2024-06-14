import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowRoundForward,
} from "react-icons/io";

export default function NamePage() {
  return (
    <div className="flex flex-col w-full md:flex-row p-[100px] items-center justify-center">
      <div className="w-full max-w-2xl md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h1 className="font-Lexe text-2xl mb-4 text-[#191b3a]">
          <span className="text-[#cf9fff] text-sm">1 </span>
          <IoIosArrowRoundForward className="text-[#cf9fff] mr-2 text-sm inline-block size-6" />
          Before we start, what is your name?
        </h1>
        <div className="mb-4">
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
            className="border-b-[#cf9fff] text-[#cf9fff] border-b border-[#8000ff] rounded-none px-4 py-2 w-full focus:outline-none placeholder-[#f1e2ff] text-2xl caret-[#cf9fff]"
          />
        </div>
        <div className="mb-4">
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
            className="border-b-[#cf9fff] text-[#cf9fff] border-b border-[#cf9fff] rounded-none px-4 py-2 w-full focus:outline-none placeholder-[#f1e2ff] text-2xl caret-[#cf9fff]"
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
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
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
  );
}
