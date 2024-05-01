import logo from "../assets/logo.svg";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const links: string[] = ["About", "Services", "Projects"];

  return (
    <header className="absolute bottom-0 top-0 z-20 w-full px-6 py-8">
      <div className="flex justify-between">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="md:hidden">
          <button aria-label="toggle menu" onClick={() => setIsOpen(!isOpen)}>
            <img src={hamburgerIcon} alt="hamburger icon" />
          </button>
        </div>
      </div>

      <nav>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="relative mt-12 flex h-[19rem] w-full flex-col items-center justify-center bg-white before:absolute before:-top-7 before:right-0 before:h-0 before:w-0 before:border-l-[2rem] before:border-r-[2rem] before:border-t-[2rem] before:border-transparent before:border-r-white md:hidden">
            <ul className="space-y-8 text-center text-xl text-VeryDarkGrayishBlue">
              {links.map((link, index) => (
                <li key={index} className="hover:opacity-70">
                  <a href={`#${link}`}>{link}</a>
                </li>
              ))}
              <li>
                <button className="rounded-full bg-Yellow px-6 py-2.5 font-Fraunces font-bold uppercase text-VeryDarkDesaturatedBlue hover:opacity-70">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
        {/* Desktop Navigation */}
        <div className="hidden md:inline-block">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
