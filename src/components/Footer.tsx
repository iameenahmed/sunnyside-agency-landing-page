import logo from "../assets/logo.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";

const Footer = () => {
  const socials = [
    { name: "facebook", icon: facebookIcon },
    { name: "instagram", icon: instagramIcon },
    { name: "twitter", icon: twitterIcon },
    { name: "pinterest", icon: pinterestIcon },
  ];

  return (
    <footer className="flex flex-col items-center bg-LightCyan py-[4.5rem] text-DarkModerateCyan">
      <div className="w-[10.75rem]">
        <img src={logo} alt="logo" className="w-full" />
      </div>
      <div>
        <ul className="mt-10 flex gap-14">
          <li className="group relative cursor-pointer">
            About
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-DarkModerateCyan transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="group relative cursor-pointer">
            Services
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-DarkModerateCyan transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="group relative cursor-pointer">
            Projects
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-DarkModerateCyan transition-all duration-300 group-hover:w-full" />
          </li>
        </ul>
      </div>
      <div>
        <ul className="mt-20 flex gap-7">
          {socials.map((social, index) => (
            <li key={index}>
              <a
                href={`www.${social.name}.com`}
                aria-label={`go to ${social.name} page`}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
