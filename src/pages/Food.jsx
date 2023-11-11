import { AiFillStar } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";

const Food = () => {
  const data = useLoaderData();
  const {
    _id,
    foodName,
    rating,
    foodOrigin,
    foodCategory,
    price,
    quantity,
    foodImage,
    description,
  } = data;
  return (
    <div className="my-10 md:h-[400px] mx-auto relative flex flex-col md:flex-row lg:w-full lg:max-w-[48rem] w-[22rem] md:w-[44rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative w-full  md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border bg-center bg-cover">
        <img
          src={foodImage}
          alt="image"
          className="object-cover w-full h-full rounded-lg md:rounded-none"
        />
      </div>
      <div className="p-6 space-y-3">
        <div className="flex justify-between">
          <h1 className="text-lg text-[#626262] font-normal">{foodCategory}</h1>
          <h1 className=" text-xl text-[#fe8109] font-semibold flex items-center">
            <AiFillStar />
            <span className="text-lg font-medium">{rating}</span>
          </h1>
        </div>

        <h5 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-[#2f2f2f]">
          {foodName}
        </h5>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          {description}
        </p>
        <p className="block font-medium text-lg  text-[#626262] antialiased leading-relaxed text-inherit">
          Origin: {foodOrigin}
        </p>
        <p className="block font-medium text-lg  text-[#626262] antialiased leading-relaxed text-inherit">
          Available Quantity : {quantity}
        </p>

        <h1 className="text-lg text-[#2f2f2f] font-semibold">{`Price: $ ${price}`}</h1>

        <Link
          to={`/order/${_id}`}
          className="flex justify-center md:w-[80%] mx-auto bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default Food;
