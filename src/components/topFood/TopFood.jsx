import FoodCard from "../card/foodCard/FoodCard";

const TopFood = () => {
  return (
    // <div className="flex gap-8 justify-center">
    <div className="mb-10">
      <div className="space-y-5 my-10">
        <h1 className="text-6xl font-semibold text-center">Popular Foods</h1>
        <p className="text-xl font-normal text-center">
          Most popular food in the restaurant
        </p>
      </div>
      <div className="w-[85%] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-0 grid-rows-1 justify-center">
          <FoodCard></FoodCard>
          <FoodCard></FoodCard>
          <FoodCard></FoodCard>
        </div>
      </div>
    </div>
  );
};

export default TopFood;
