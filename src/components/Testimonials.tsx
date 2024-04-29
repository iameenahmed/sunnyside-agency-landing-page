import emilyImage from "../assets/image-emily.jpg";
import thomasImage from "../assets/image-thomas.jpg";
import jennieImage from "../assets/image-jennie.jpg";

const Testimonials = () => {
  return (
    <div>
      <h3>Client Testimonials</h3>
      <div>
        <div>
          <div>
            <h4>
              Emily R. <span>Marketing Director</span>
            </h4>
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
          </div>
          <img src={emilyImage} alt="image of emily" />
        </div>
        <div>
          <div>
            <h4>
              Thomas S. <span>Cheif Operating Officer</span>
            </h4>
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
          </div>
          <img src={thomasImage} alt="image of thomas" />
        </div>
        <div>
          <div>
            <h4>
              Jennie F. <span>Business Owner</span>
            </h4>
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
          </div>
          <img src={jennieImage} alt="image of jennie" />
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
