import emilyImage from "../assets/image-emily.jpg";
import thomasImage from "../assets/image-thomas.jpg";
import jennieImage from "../assets/image-jennie.jpg";

const Testimonials = () => {
  return (
    <div className="my-16 px-6 text-center text-VeryDarkGrayishBlue">
      <h3 className="font-Fraunces text-xl font-bold uppercase tracking-widest text-DarkGrayishBlue">
        Client Testimonials
      </h3>
      <div className="mt-12 grid gap-16">
        <div className="flex flex-col-reverse items-center gap-7">
          <blockquote>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
            <footer className="mt-6">
              <cite className="font-Fraunces font-bold not-italic text-VeryDarkDesaturatedBlue">
                Emily R.
                <span className="block font-Barlow text-base font-semibold leading-loose text-GrayishBlue">
                  Marketing Director
                </span>
              </cite>
            </footer>
          </blockquote>
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img src={emilyImage} alt="image of emily" />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-7">
          <blockquote>
            We put our trust in sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
            <footer className="mt-6">
              <cite className="font-Fraunces font-bold not-italic text-VeryDarkDesaturatedBlue">
                Thomas S.
                <span className="block font-Barlow text-base font-semibold leading-loose text-GrayishBlue">
                  Cheif Operating Officer
                </span>
              </cite>
            </footer>
          </blockquote>
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img src={thomasImage} alt="image of thomas" />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-7">
          <blockquote>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
            <footer className="mt-6">
              <cite className="font-Fraunces font-bold not-italic text-VeryDarkDesaturatedBlue ">
                Jennie F.
                <span className="block font-Barlow text-base font-semibold leading-loose text-GrayishBlue">
                  Business Owner
                </span>
              </cite>
            </footer>
          </blockquote>
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img src={jennieImage} alt="image of jennie" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
