import Marquee from "react-fast-marquee";

const Discount = () => {
  return (
    <div className="bg-green-200 font-medium text-xl py-4">
      <Marquee>
        <p>
          Get a 20% discount on purchases totaling over
          <span className="font-bold"> 3000</span> TK.
        </p>
      </Marquee>
    </div>
  );
};

export default Discount;
