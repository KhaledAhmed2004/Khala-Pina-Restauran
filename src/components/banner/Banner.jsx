import { Link } from "react-router-dom";
import { MdTableBar } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="flex h-[580px]  p-5 my-8">
      <div className="w-[60%] space-y-3 px-8 flex flex-col justify-center">
        <h1 className="text-6xl font-semibold">
          We are always here to serve you.
        </h1>
        <p>
          This is a type of restaurant that typically serves delectable meals
          and refreshing beverages, complemented by delightful offerings such as
          baked goods or tantalizing snacks.
        </p>
        <div className="flex gap-3">
          <Link className="bg-green-500 gap-2 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 flex items-center uppercase text-base font-medium">
            <MdTableBar /> Book a Table
          </Link>
          <Link
            to="/allFoodItems"
            className="border-2 dark:text-white border-green-500 hover:border-green-800 rounded-full py-2 px-6 font-medium uppercase text-base hover:scale-105 transition-all duration-200 ease-in flex items-center gap-2"
          >
            <BiFoodMenu /> View items
          </Link>
        </div>
      </div>
      <div className="grid h-full w-[40%] grid-cols-12 grid-rows-6 gap-4">
        <div className="col-span-6 row-span-3 rounded-xl bg-[url('https://i.ibb.co/G0MBkfW/chad-montano-Mq-T0asuo-Ic-U-unsplash.jpg')] bg-cover bg-center bg-no-repeat hover:translate-y-[-15px] duration-200 hover:shadow-xl"></div>
        <div className="col-start-7 col-end-12 row-start-2 row-end-4 rounded-xl bg-[url('https://i.ibb.co/gt5mBHh/courtney-cook-xt-Vj-WVCi-E-U-unsplash.jpg')] bg-cover bg-center bg-no-repeat hover:translate-y-[-10px] duration-200 hover:shadow-xl"></div>
        <div className="col-span-5 row-span-3 rounded-xl bg-[url('https://i.ibb.co/T0FW3HC/monika-grabkowska-y6-A9bh-ILk-M-unsplash.jpg')] bg-cover bg-center bg-no-repeat hover:translate-y-[-10px] duration-200 hover:shadow-xl"></div>
        <div className="col-span-7 row-span-3 rounded-xl bg-[url('https://i.ibb.co/1sC1g7M/shenggeng-lin-Xo-N3v3-Ge7-EE-unsplash.jpg')] bg-cover bg-center bg-no-repeat hover:translate-y-[-10px] duration-200 hover:shadow-xl"></div>
      </div>
    </div>
  );
};

export default Banner;
