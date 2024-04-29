import milkbottles from "../assets/desktop/image-gallery-milkbottles.jpg";
import cone from "../assets/desktop/image-gallery-cone.jpg";
import orange from "../assets/desktop/image-gallery-orange.jpg";
import sugarcubes from "../assets/desktop/image-gallery-sugarcubes.jpg";

import milkbottlesMobile from "../assets/mobile/image-gallery-milkbottles.jpg";
import coneMobile from "../assets/mobile/image-gallery-cone.jpg";
import orangeMobile from "../assets/mobile/image-gallery-orange.jpg";
import sugarcubesMobile from "../assets/mobile/image-gallery-sugar-cubes.jpg";

const Projects = () => {
  return (
    <div>
      <picture>
        <source srcSet={milkbottles} media="(min-width: 768px)" />
        <img src={milkbottlesMobile} alt="milk bottles" />
      </picture>
      <picture>
        <source srcSet={cone} media="(min-width: 768px)" />
        <img src={coneMobile} alt="cone" />
      </picture>
      <picture>
        <source srcSet={orange} media="(min-width: 768px)" />
        <img src={orangeMobile} alt="a slice of orange" />
      </picture>
      <picture>
        <source srcSet={sugarcubes} media="(min-width: 768px)" />
        <img src={sugarcubesMobile} alt="sugar cubes" />
      </picture>
    </div>
  );
};
export default Projects;
