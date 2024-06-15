import { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import PhoneNumberPage from "./PhoneNumberPage";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import EmailPage from "./EmailPage";

export default function CountryPage() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showPhoneNumberPage, setShowPhoneNumberPage] = useState(false);
  const [showEmailPage, setShowEmailPage] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const goToEmailPage = () => {
    setShowEmailPage(true);
  };

  const goToPhoneNumberPage = () => {
    setShowPhoneNumberPage(true);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountries();
  }, []);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      {showPhoneNumberPage ? (
        <PhoneNumberPage />
      ) : showEmailPage ? (
        <EmailPage />
      ) : (
        <div className="flex flex-col w-full md:flex-row pt-[150px] pr-[40px] items-center justify-center">
          <div className="w-full max-w-2xl mb-2 md:mb-0">
            <h1 className="font-Lexe text-2xl mb-8 text-[#191b3a]">
              <span className="text-[#cf9fff] text-sm mr-1">3 </span>
              <IoIosArrowRoundForward className="text-[#cf9fff] mr-2 text-sm inline-block size-6" />
              Which country are you from? 🏡🏡🏡
            </h1>
            <div className="mb-4 ml-[3rem] relative">
              <div
                className={`border-b-[#cf9fff] border-b border-[#8000ff] rounded-none px-4 py-2 w-full focus:outline-none placeholder-[#f1e2ff] text-3xl caret-[#cf9fff] cursor-pointer ${
                  selectedCountry ? "text-[#cf9fff]" : "text-[#f1e2ff]"
                }`}
                onClick={toggleDropdown}
              >
                {selectedCountry || "Type or select an option"}
              </div>
              {dropdownOpen && (
                <ul className="absolute z-10 w-full bg-white border border-[#cf9fff] max-h-60 overflow-y-auto mt-2 rounded-md">
                  {countries.map((country, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-xl text-[#cf9fff] border-b border-[#cf9fff] cursor-pointer hover:bg-[#f1e2ff]"
                      onClick={() => handleCountryChange(country.name)}
                    >
                      {country.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex items-center space-x-4 ml-[3.5rem]">
              <button
                className="bg-[#cf9fff] hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 font-bold"
                onClick={goToPhoneNumberPage}
              >
                OK
              </button>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center">
            <button
              className="text-white hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-l-lg"
              onClick={goToEmailPage}
            >
              <SlArrowUp className="h-4 w-6" />
            </button>
            <div className="border-r-[1.5px] border-[#aa72e3] h-8"></div>
            <button
              className="text-white hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-r-lg"
              onClick={goToPhoneNumberPage}
            >
              <SlArrowDown className="h-4 w-6" />
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
