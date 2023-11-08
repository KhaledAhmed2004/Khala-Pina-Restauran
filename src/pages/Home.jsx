import Banner from "../components/banner/Banner";
import Chiefs from "../components/chiefs/Chiefs";
import Testimonial from "../components/testimonial/Testimonial";
import TopFood from "../components/topFood/TopFood";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopFood></TopFood>
      <Testimonial></Testimonial>
      <Chiefs></Chiefs>
    </div>
  );
};

export default Home;
