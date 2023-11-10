import { Link } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";

const FoodCard = ({ topFood }) => {
  const { _id, foodName, rating, foodCategory, price, foodImage } = topFood;
  return (
    <div className="relative w-[320px] h-[420px] flex flex-col justify-between">
      <div
        style={{ backgroundImage: `url(${foodImage})` }}
        className={` relative w-full h-[240px] bg-red-600 rounded-xl  bg-cover bg-center  
        before:absolute before:w-5 before:h-6 before:bg-transparent before:rounded-full before:shadow-[-10px_10px_0_#fff] before:left-[50%] before:bottom-0

        after:absolute after:w-6 after:h-6 after:rounded-full after:shadow-[-10px_10px_0_#fff] after:left-0 after:bottom-[70px] after:hover:bottom-[55px] after:bg-transparent after:duration-200

        hover:translate-y-[-15px] duration-200
        `}
      ></div>
      <div className="relative w-full h-[170px] bg-[#fee4cb] rounded-xl rounded-tl-none px-9 py-2">
        <div
          className="
          absolute h-[80px] top-[-80px] w-[50%] bg-[#fee4cb] rounded-tr-3xl border-t-[12px] border-r-[12px] border-white left-0

          before:absolute before:w-6 before:h-6 before:rounded-full before:shadow-[-10px_-10px_0_#fff] before:bg-transparent

          after:absolute after:w-6 after:h-6 after:rounded-full after:shadow-[-10px_10px_0_#fee4cb] after:right-[-25px] after:bottom-0 after:bg-transparent
        "
        >
          <span className="relative bg-white p-3 my-[15px] mx-[15px] block rounded-xl font-semibold text-center text-[#2f2f2f] hover:scale-[1.07] duration-200">
            {`$ ${price}`}
          </span>
        </div>

        <div className="flex flex-col">
          <h1 className="text-lg text-[#626262] font-normal ml-1">
            {foodCategory}
          </h1>

          <h1 className=" text-2xl text-[#2f2f2f] font-semibold ml-1">
            {foodName}
          </h1>
          <h1 className=" text-xl text-[#fe8109] font-semibold ml-1 flex items-center">
            <AiFillStar />
            <span className="text-lg font-medium">{rating}</span>
          </h1>
          <Link
            to={`/food/${_id}`}
            className="mt-2 bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium flex items-center justify-center gap-2"
          >
            <FcViewDetails /> View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
