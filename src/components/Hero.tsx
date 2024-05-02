import heroDesktop from "../assets/desktop/image-header.jpg";
import hero from "../assets/mobile/image-header.jpg";

const Hero = () => {
  return (
    <div className="relative left-0 top-0">
      <div className="absolute bottom-1/2 left-0 right-0 text-center lg:bottom-2/3">
        <h1 className="font-Fraunces text-4xl font-black uppercase leading-snug tracking-[0.2em] text-white xl:text-[3.5rem]">
          We are creatives
        </h1>
      </div>
      <picture>
        <source srcSet={heroDesktop} media="(min-width: 768px)" />
        <img src={hero} alt="a slice of orange" />
      </picture>
    </div>
  );
};
export default Hero;
