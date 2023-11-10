import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import FoodCard from "../card/foodCard/FoodCard";
import Lottie from "lottie-react";
import foodAnimation from "../../assets/food.json";
import { Link } from "react-router-dom";

const TopFood = () => {
  const axios = useAxios();
  const getTopFoods = async () => {
    const res = await axios.get("/foodItems");
    const sortedData = res?.data?.sort((a, b) => b.count - a.count);
    return sortedData.slice(0, 6);
  };
  const { data, isLoading } = useQuery({
    queryKey: ["topFoods"],
    queryFn: getTopFoods,
  });

  if (isLoading) {
    return <Lottie animationData={foodAnimation}></Lottie>;
  }

  console.log("topfoods:", data);

  return (
    // <div className="flex gap-8 justify-center">
    <div className="mb-10">
      <div className="space-y-5 my-10">
        <h1 className="text-6xl font-semibold text-center">Popular Foods</h1>
        <p className="text-xl font-normal text-center">
          Most popular food in the restaurant
        </p>
      </div>
      <div className="w-[80%] md:w-[88%] lg:w-[66%] xl:w-[80%] mx-auto mb-8">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 grid-rows-1 justify-center ">
          {data.map((topFood) => (
            <FoodCard key={topFood._id} topFood={topFood}></FoodCard>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          to="/allFoodItems"
          className="bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default TopFood;
