/**
 * Navbar Component - Displays the logo in the navigation bar.
 */
import Logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="pt-4 max-w-7xl mx-auto flex h-4 ml-[20px]">
        <img className="h-12 ml-1 mt-3" src={Logo} alt="Logo" />{" "}
      </div>
    </nav>
  );
}
