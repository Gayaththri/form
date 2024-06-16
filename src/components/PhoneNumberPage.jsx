/**
 * PhoneNumberPage Component - Allows the user to input their phone number and select their country.
 */
import { useState, useEffect, useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import LanguagePage from "./LanguagePage";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import CountryPage from "./CountryPage";

export default function PhoneNumberPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showLanguagePage, setShowLanguagePage] = useState(false);
  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showCountryPage, setShowCountryPage] = useState(false);

  const goToCountryPage = () => {
    setShowCountryPage(true);
  };

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
          setCountries(data);
          const randomIndex = Math.floor(Math.random() * data.length);
          setSelectedCountry(data[randomIndex]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPhoneNumberData();
  }, []);

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    setPhoneNumber(input);
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {showLanguagePage ? (
        <LanguagePage onNextPage={undefined} />
      ) : showCountryPage ? (
        <CountryPage />
      ) : (
        <div className="flex flex-col w-full md:flex-row pt-[150px] pr-[40px] items-center justify-center">
          <div className="w-full max-w-2xl mb-2 md:mb-0">
            <h1 className="font-Lexe text-2xl mb-8 text-[#191b3a]">
              <span className="text-[#cf9fff] text-sm mr-1">4 </span>
              <IoIosArrowRoundForward className="text-[#cf9fff] mr-2 text-sm inline-block size-6" />
              <span className="ml-2">What is your phone number?</span>
            </h1>
            <div className="flex items-center mb-4 ml-[3rem] space-x-4">
              {selectedCountry && (
                <div className="flex items-center space-x-2">
                  <img
                    src={selectedCountry.flags.png}
                    alt="Country Flag"
                    className="w-10 h-8 inline-block"
                  />
                  <SlArrowDown
                    className="text-[#cf9fff] text-2xl inline-block cursor-pointer"
                    onClick={handleToggleDropdown}
                  />
                </div>
              )}
              <div className="relative border-b-[#cf9fff] border-[#8000ff] rounded-none px-4 py-2 w-full focus:outline-none placeholder-[#f1e2ff] caret-[#cf9fff] cursor-pointer flex-grow">
                {dropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 w-full bg-white border-[#8000ff] shadow-md z-10 overflow-auto max-h-60 mt-2"
                  >
                    {countries.map((country) => (
                      <div
                        key={country.cca2}
                        className="px-4 py-2 flex items-center justify-between hover:bg-[#f1e2ff] cursor-pointer border-b-[#cf9fff] border-b border-[#8000ff] rounded-none"
                        onClick={() => handleCountryChange(country)}
                      >
                        <div className="flex items-center space-x-2">
                          <img
                            src={country.flags.png}
                            alt="Country Flag"
                            className="w-6 h-6"
                          />
                          <span className="w-24 truncate">
                            {country.name.common}
                          </span>
                          <span className="w-20 truncate">
                            {country.idd.root}
                            {country.idd.suffixes}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Enter your phone number"
                  className="border-b-[#cf9fff] text-[#cf9fff] border-b border-[#8000ff] rounded-none px-4 py-2 w-full focus:outline-none placeholder-[#f1e2ff] text-2xl caret-[#cf9fff] pl-0"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4 ml-[3rem]">
              <button className="bg-[#cf9fff] hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 font-bold text-xl">
                OK
              </button>
              <p className="text-xs text-[#191b33]">Press Enter ↵</p>
            </div>
          </div>

          {/*Footer */}
          <div className="fixed bottom-0 right-0 flex items-center w-full justify-end p-4">
            <button
              className="text-white font-bold hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-l-md"
              onClick={goToCountryPage}
            >
              <SlArrowUp className="h-4 w-6" />
            </button>
            <div className="border-r-[1.5px] border-[#aa72e3] h-8"></div>
            <button
              className="text-white hover:text-[#d6adff] transition-colors duration-300 p-2 bg-[#cf9fff] rounded-r-md"
              onClick={goToLanguagePage}
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
