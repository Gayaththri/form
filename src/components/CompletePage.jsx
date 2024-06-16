import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function CompletePage() {
  document.body.classList.add("overflow-hidden");

  return (
    <div className="flex flex-col h-screen items-center relative justify-center pl-10">
      <div className="w-full max-w-3xl mb-9">
        <h1 className="font-Lexe text-4xl mb-4 text-[#191b3a] text-center justify-center">
          Thank you for applying
        </h1>
        <p className="text-gray-500 text-xl mb-4 text-center justify-center">
          An admissions team member will contact you shortly.
        </p>
        <div className="flex items-center justify-center">
          <div className="flex items-center mb-6">
            <div className="social-icon">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl h-9 w-7 px-1 py-1 bg-[#3a559f] mr-2 flex items-center"
              >
                <FaFacebookF />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl h-9 px-1 py-2 bg-[#50abf1] mr-2 flex items-center"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl h-9 px-1 py-2 bg-[#0084b1] flex items-center"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pl-[80px]">
          <a
            href="https://www.typeform.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white items-center justify-center text-2xl hover:bg-[#d6adff] transition-colors duration-300 px-4 py-2 bg-[#cf9fff] rounded-md font-bold"
          >
            Create a typeform
          </a>
          <span className="ml-4 text-xs text-[#191b33]">press Enter ↵</span>
        </div>
      </div>
    </div>
  );
}
