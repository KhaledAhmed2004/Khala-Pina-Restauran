import { useEffect } from "react";
import ChiefCard from "../card/chiefCard/ChiefCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Chiefs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="my-9">
      <div data-aos="fade-up">
        <h1 className="text-6xl font-semibold text-center">Our Chiefs</h1>
      </div>

      <div data-aos="zoom-in">
        <ChiefCard></ChiefCard>
      </div>
    </div>
  );
};

export default Chiefs;
