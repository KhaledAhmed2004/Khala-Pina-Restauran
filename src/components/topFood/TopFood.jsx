import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import FoodCard from "../card/foodCard/FoodCard";

const TopFood = () => {
  const axios = useAxios();
  const getTopFoods = async () => {
    const res = await axios.get("/foodItems");
    const sortedData = res?.data?.sort((a, b) => b.count - a.count);
    return sortedData.slice(0, 6);
  };
  const { data } = useQuery({
    queryKey: ["topFoods"],
    queryFn: getTopFoods,
  });

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
      <div className="w-[80%] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 grid-rows-1 justify-center">
          {data.map((topFood) => (
            <FoodCard key={topFood._id} topFood={topFood}></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopFood;
