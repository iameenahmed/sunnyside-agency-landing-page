import transform from "../assets/desktop/image-transform.jpg";
import standOut from "../assets/desktop/image-stand-out.jpg";
import graphicDesign from "../assets/desktop/image-graphic-design.jpg";
import photography from "../assets/desktop/image-photography.jpg";

import transformMobile from "../assets/mobile/image-transform.jpg";
import standOutMobile from "../assets/mobile/image-stand-out.jpg";
import graphicDesignMobile from "../assets/mobile/image-graphic-design.jpg";
import photographyMobile from "../assets/mobile/image-photography.jpg";

const Services = () => {
  return (
    <div>
      <div className="flex flex-col-reverse text-VeryDarkDesaturatedBlue">
        <div className="space-y-6 px-6 py-14 text-center">
          <h2 className="font-Fraunces text-4xl font-black ">
            Transform your brand
          </h2>
          <p className="leading-relaxed text-DarkGrayishBlue">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="relative font-Fraunces font-bold uppercase after:absolute after:-left-2 after:bottom-0 after:h-2.5 after:w-36 after:rounded-full after:bg-Yellow/30">
            Learn more
          </button>
        </div>
        <picture className="">
          <source srcSet={transform} media="(min-width: 768px)" />
          <img src={transformMobile} alt="egg" />
        </picture>
      </div>

      <div className="flex flex-col-reverse">
        <div className="space-y-6 px-6 py-14 text-center">
          <h2 className="font-Fraunces text-4xl font-black ">
            Stand out to the right audience
          </h2>
          <p className="leading-relaxed text-DarkGrayishBlue">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className="relative font-Fraunces font-bold uppercase after:absolute after:-left-2 after:bottom-0 after:h-2.5 after:w-36 after:rounded-full after:bg-SoftRed/30">
            Learn more
          </button>
        </div>
        <picture>
          <source srcSet={standOut} media="(min-width: 768px)" />
          <img src={standOutMobile} alt="glass illustration" />
        </picture>
      </div>

      <div className="relative flex flex-col-reverse">
        <div className="absolute bottom-14 space-y-6 px-6 text-center">
          <h2 className="font-Fraunces text-3xl font-black">Graphic design</h2>
          <p className="text-DarkDesaturatedCyan">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <picture>
          <source srcSet={graphicDesign} media="(min-width: 768px)" />
          <img src={graphicDesignMobile} alt="cheery" />
        </picture>
      </div>

      <div className="relative flex flex-col-reverse">
        <div className="absolute bottom-14 space-y-6 px-6 text-center">
          <h2 className="font-Fraunces text-3xl font-black">Photography</h2>
          <p className="text-DarkBlue">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
        <picture>
          <source srcSet={photography} media="(min-width: 768px)" />
          <img src={photographyMobile} alt="a slice of orange" />
        </picture>
      </div>
    </div>
  );
};
export default Services;
