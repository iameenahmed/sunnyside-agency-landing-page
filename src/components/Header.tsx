import logo from "../assets/logo.svg";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const links: string[] = ["About", "Services", "Projects", "Contact"];

  return (
    <header>
      <div>
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
          <div className="md:hidden">
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={`#${link}`}>{link}</a>
                </li>
              ))}
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
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
