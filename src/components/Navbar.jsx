import Logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="pt-8 max-w-7xl mx-auto flex h-16 ml-[43px]">
        <img className="h-12 ml-0" src={Logo} alt="Logo" />{" "}
      </div>
    </nav>
  );
}
