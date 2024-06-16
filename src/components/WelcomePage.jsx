/**
 * This component serves as the main landing page of the application.
 * It contains loading state, main content, and navigation to NamePage.
 */
import { useState, useEffect } from "react";
import Image from "../assets/welcome.png";
import NamePage from "./NamePage";
import { FaUserFriends } from "react-icons/fa";
import logo from "../assets/Logo.png";
import Navbar from "./Navbar";
import Loader from "./Loader";

export default function WelcomePage() {
  const [showNamePage, setShowNamePage] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleStartJourney = () => {
    setShowNamePage(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "hidden";
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "hidden";
  }, [loading]);

  return (
    <>
      {!loading && <Navbar />}
      <div className={loading ? "no-scroll" : ""}>
        {loading ? (
          <div className="flex flex-col h-screen justify-center items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-32 mb-2 md:w-32 items-center justify-center"
            />
            <Loader />
          </div>
        ) : (
          <div className="relative">
            <div
              className={`${
                showNamePage ? "opacity-0" : "opacity-100"
              } transition-opacity duration-500 ease-out`}
            >
              <div
                className={`flex flex-col w-full md:flex-row ${
                  loading ? "pt-[80px]" : "pt-[140px]"
                } pr-[35px] pl-[18px] items-center justify-center`}
              >
                <div className="max-w-2xl md:w-1/2 mb-8 md:mb-0">
                  <h1 className="font-Lexe text-4xl font-bold mb-4 text-[#191b3a]">
                    Launch your Data Career in <br /> Weeks, not Years{" "}
                  </h1>
                  <p className="mb-0 text-[#6c6e7e] text-xl">What to expect:</p>{" "}
                  <ul className="list-none text-left mb-7 text-[#6c6e7e] text-xl">
                    <li className="before:content-['-'] before:mr-2">
                      <span className="font-bold">Short-answer</span> questions
                      & <span className="font-bold"> No </span>
                      cover letter
                    </li>
                    <li className="before:content-['-'] before:mr-2">
                      Takes 4 mins on average
                    </li>
                  </ul>
                  <div className="flex items-center">
                    <button
                      onClick={handleStartJourney}
                      className="bg-[#cf9fff] hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 mr-4"
                    >
                      <h1 className="font-bold text-2xl">Start Your Journey</h1>
                    </button>
                    <p className="text-xs text-[#191b33]">press Enter ↵</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <FaUserFriends className="mr-2 text-xs" />
                    <p className="mr-2 text-sm">
                      129 people have filled this out
                    </p>
                  </div>
                </div>

                <div className="w-[45%] pl-10">
                  <img
                    src={Image}
                    alt="Data career image"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div
              className={`absolute top-0 left-0 w-full h-full ${
                showNamePage ? "" : "translate-y-full"
              }`}
            >
              {showNamePage && <NamePage />}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
