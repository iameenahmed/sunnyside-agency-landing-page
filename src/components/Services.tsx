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
    <div className="lg:grid lg:grid-cols-2 lg:grid-rows-3">
      <div className="flex flex-col-reverse text-VeryDarkDesaturatedBlue lg:col-span-2 lg:flex-row">
        <div className="space-y-6 px-6 py-14 text-center lg:basis-1/2 lg:space-y-8 lg:pl-10 lg:text-start xl:pl-[10.125rem] xl:pr-[6rem] xl:pt-[9.7rem]">
          <h2 className="font-Fraunces text-4xl font-black lg:pr-8 lg:text-[2.5rem] lg:leading-tight">
            Transform your brand
          </h2>
          <p className="leading-relaxed text-DarkGrayishBlue">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="relative font-Fraunces text-base font-bold uppercase tracking-wider after:absolute after:-left-0 after:bottom-2.5 after:h-2.5 after:w-full after:rounded-full after:bg-Yellow/30 lg:p-2.5">
            Learn more
          </button>
        </div>
        <picture className="w-full lg:basis-1/2">
          <source srcSet={transform} media="(min-width: 768px)" />
          <img src={transformMobile} alt="egg" className="w-full" />
        </picture>
      </div>

      <div className="flex flex-col-reverse lg:col-span-2 lg:flex-row-reverse">
        <div className="space-y-6 px-6 py-14 text-center lg:basis-1/2 lg:space-y-8 lg:pl-10 lg:text-start xl:pl-[7rem] xl:pr-[10.125rem] xl:pt-[9.7rem]">
          <h2 className="font-Fraunces text-4xl font-black lg:text-[2.5rem] lg:leading-tight">
            Stand out to the right audience
          </h2>
          <p className="leading-relaxed text-DarkGrayishBlue">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className="relative font-Fraunces text-base font-bold uppercase tracking-wider after:absolute after:-left-0 after:bottom-2.5 after:h-2.5 after:w-full after:rounded-full after:bg-SoftRed/30 lg:p-2.5">
            Learn more
          </button>
        </div>
        <picture className="w-full lg:basis-1/2">
          <source srcSet={standOut} media="(min-width: 768px)" />
          <img
            src={standOutMobile}
            alt="glass illustration"
            className="w-full"
          />
        </picture>
      </div>

      <div className="relative flex flex-col-reverse">
        <div className="absolute bottom-14 space-y-7 px-6 text-center text-DarkDesaturatedCyan xl:px-[10.5rem]">
          <h2 className="font-Fraunces text-[1.75rem] font-black">
            Graphic Design
          </h2>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <picture>
          <source srcSet={graphicDesign} media="(min-width: 768px)" />
          <img src={graphicDesignMobile} alt="cheery" className="w-full" />
        </picture>
      </div>

      <div className="relative flex flex-col-reverse">
        <div className="absolute bottom-14 space-y-7 px-6 text-center text-DarkBlue xl:px-[10.5rem]">
          <h2 className="font-Fraunces text-[1.75rem] font-black">
            Photography
          </h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
        <picture>
          <source srcSet={photography} media="(min-width: 768px)" />
          <img
            src={photographyMobile}
            alt="a slice of orange"
            className="w-full"
          />
        </picture>
      </div>
    </div>
  );
};
export default Services;
