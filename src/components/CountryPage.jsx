import { useState, useEffect } from "react";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowRoundForward,
} from "react-icons/io";

export default function CountryPage() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

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

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="flex flex-col w-full md:flex-row p-[100px] items-center justify-center relative">
      <div className="w-full max-w-2xl md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h1 className="font-Lexe text-2xl mb-4 text-[#191b3a] flex items-center">
          <span className="text-[#cf9fff] text-sm">3 </span>
          <IoIosArrowRoundForward className="text-[#cf9fff] mr-2 text-sm inline-block" />
          Which country are you from? 🏡🏡🏡
        </h1>
        <div className="mb-4">
          <select
            id="country"
            name="country"
            value={selectedCountry}
            onChange={handleCountryChange}
            className="border-b-[#cf9fff] text-[#cf9fff] border-b border-[#8000ff] rounded-none px-4 py-2 w-full focus:outline-none placeholder-[#f1e2ff] text-2xl caret-[#cf9fff]"
          >
            <option value="">Select or type your country</option>
            {countries.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-[#cf9fff] hover:bg-[#d6adff] text-white px-4 py-2 rounded-md transition duration-300 font-bold">
            OK
          </button>
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
