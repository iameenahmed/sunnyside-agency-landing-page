import heroDesktop from "../assets/desktop/image-header.jpg";
import hero from "../assets/mobile/image-header.jpg";

const Hero = () => {
  return (
    <div>
      <h1>We are creative</h1>
      <picture>
        <source srcSet={heroDesktop} media="(min-width: 768px)" />
        <img src={hero} alt="a slice of orange" />
      </picture>
    </div>
  );
};
export default Hero;
