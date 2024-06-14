import { useState, useEffect } from "react";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowRoundForward,
} from "react-icons/io";
import LanguagePage from "./LanguagePage";

export default function PhoneNumberPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [countryFlag, setCountryFlag] = useState("");
  const [showLanguagePage, setShowLanguagePage] = useState(false);

  const goToLanguagePage = () => {
    setShowLanguagePage(true);
  };

  useEffect(() => {
    const fetchPhoneNumberData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch phone number data");
        }
        const data = await response.json();
        if (data && Array.isArray(data)) {
          const randomIndex = Math.floor(Math.random() * data.length);
          const countryData = data[randomIndex];
          setCountryCode(countryData.cca2);
          setCountryFlag(countryData.flags[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPhoneNumberData();
  }, []);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div>
      {showLanguagePage ? ( // Conditionally render the CountryPage
        <LanguagePage onNextPage={undefined} />
      ) : (
        <div className="flex flex-col w-full md:flex-row p-[100px] items-center justify-center relative">
          <div className="w-full max-w-2xl md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="font-Lexe text-2xl mb-4 text-[#191b3a] flex items-center">
              <span className="text-[#cf9fff] text-sm">4 </span>
              <IoIosArrowRoundForward className="text-[#cf9fff] mr-2 text-sm inline-block" />
              What is your phone number?
            </h1>
            <div className="mb-4">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter your phone number"
                className="border-b-[#cf9fff] text-[#cf9fff] border-b border-[#8000ff] rounded-none px-4 py-2 w-full focus:outline-none placeholder-[#f1e2ff] text-2xl caret-[#cf9fff]"
              />
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-[#cf9fff] hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 font-bold">
                OK
              </button>
              <p className="mt-4 text-sm text-gray-500">Press Enter ↵</p>
            </div>

            <div className="mt-4">
              {countryCode && (
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{countryCode}</span>
                  <img
                    src={countryFlag}
                    alt="Country Flag"
                    className="w-8 h-8"
                  />
                </div>
              )}
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
              onClick={goToLanguagePage}
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
