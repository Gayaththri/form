import { useState } from "react";
import Image from "../assets/welcome.png";
import NamePage from "./NamePage";

export default function WelcomePage() {
  const [showNamePage, setShowNamePage] = useState(false);

  const handleStartJourney = () => {
    setShowNamePage(true);
  };

  return (
    <div>
      {showNamePage ? (
        <NamePage />
      ) : (
        <div className="flex flex-col w-full md:flex-row p-[100px] items-center justify-center">
          <div className="max-w-2xl md:w-1/2 mb-8 md:mb-0">
            <h1 className="font-Lexe text-4xl font-bold mb-4 text-[#191b3a]">
              Launch your Data Career in <br /> Weeks, not Years{" "}
            </h1>
            <p className="mb-0 text-[#6c6e7e] text-xl">What to expect:</p>{" "}
            <ul className="list-none text-left mb-4 pl-5 text-[#6c6e7e] text-xl">
              <li className="before:content-['-'] before:mr-2">
                Short-answer questions & No cover letter
              </li>
              <li className="before:content-['-'] before:mr-2">
                Takes 4 mins on average
              </li>
            </ul>
            <button
              onClick={handleStartJourney}
              className="bg-[#cf9fff] hover:bg-[#d6adff] text-white px-6 py-3 rounded-md transition duration-300"
            >
              <h1 className="font-bold text-2xl">Start Your Journey</h1>
            </button>
            <p className="mt-4 text-sm text-gray-500">press Enter ↵</p>
            <div className="flex items-center mt-2">
              <p className="mr-2">129 people have filled this out</p>
            </div>
          </div>

          <div className="p-10 w-[70%]">
            <img
              src={Image}
              alt="Data career image"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}
