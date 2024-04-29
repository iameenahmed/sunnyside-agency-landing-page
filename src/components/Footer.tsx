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
    <footer>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </div>
      <div>
        <ul>
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
