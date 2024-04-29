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
      <div>
        <div>
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button>Learn more</button>
        </div>
        <picture>
          <source srcSet={transform} media="(min-width: 768px)" />
          <img src={transformMobile} alt="egg" />
        </picture>
      </div>
      <div>
        <div>
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button>Learn more</button>
        </div>
        <picture>
          <source srcSet={standOut} media="(min-width: 768px)" />
          <img src={standOutMobile} alt="glass illustration" />
        </picture>
      </div>
      <div>
        <div>
          <div>
            <h2>Graphic design</h2>
            <p>
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
      </div>
      <div>
        <div>
          <div>
            <h2>Photography</h2>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
          <picture>
            <source srcSet={photography} media="(min-width: 768px)" />
            <img src={photographyMobile} alt="a slice of orange" />
          </picture>
        </div>
      </div>
    </div>
  );
};
export default Services;
