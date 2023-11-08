import TestimonialCard from "../card/testimonialCard/TestimonialCard";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
  return (
    // <Marquee pauseOnHover={true} speed={30}>
    // </Marquee>
    <>
      <h1 className="text-6xl font-semibold text-center">Testimonial</h1>
      <TestimonialCard></TestimonialCard>
    </>
  );
};

export default Testimonial;
