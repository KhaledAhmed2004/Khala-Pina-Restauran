import { AiFillStar } from "react-icons/ai";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";

const AllFoodCard = ({ food }) => {
  const { _id, foodName, rating, foodCategory, price, quantity, foodImage } =
    food;
  return (
    <div className="mb-5 lg:mb-7 relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <div
        style={{
          backgroundImage: `url(${foodImage})`,
        }}
        className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 bg-cover bg-center hover:scale-105 duration-200 ease-in"
      ></div>
      <div className="p-6">
        <div className="flex justify-between">
          <h1 className="text-lg text-[#626262] font-normal">{foodCategory}</h1>
          <h1 className=" text-xl text-[#fe8109] font-semibold flex items-center">
            <AiFillStar />
            <span className="text-lg font-medium">{rating}</span>
          </h1>
        </div>
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[#2f2f2f]">
          {foodName}
        </h5>
        <p className="block font-medium text-lg  text-[#626262] antialiased leading-relaxed text-inherit">
          Available Quantity : {quantity}
        </p>
        <h1 className="text-lg text-[#2f2f2f] font-semibold">{`Price: $ ${price}`}</h1>
      </div>
      <div className="p-6 pt-0">
        <Link
          to={`/food/${_id}`}
          className="mt-2 bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium flex items-center justify-center gap-2"
        >
          <FcViewDetails /> View Details
        </Link>
      </div>
    </div>
  );
};

export default AllFoodCard;
