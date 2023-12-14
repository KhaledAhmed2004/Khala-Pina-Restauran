import Banner from "../components/banner/Banner";
import Chiefs from "../components/chiefs/Chiefs";
import ContactUs from "../components/contact/ContactUs";
import Discount from "../components/discount/Discount";
import Testimonial from "../components/testimonial/Testimonial";
import TopFood from "../components/topFood/TopFood";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Discount></Discount>
      <TopFood></TopFood>
      <Testimonial></Testimonial>
      <Chiefs></Chiefs>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
