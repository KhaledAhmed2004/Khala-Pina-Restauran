import { useQuery } from "@tanstack/react-query";
import useAxios from "./../hooks/useAxios";
const AllFoodItems = () => {
  const axios = useAxios();
  const getAllFoods = async () => {
    const res = await axios.get("/foodItems");
    return res.data;
  };
  const { data } = useQuery({
    queryKey: ["allFoods"],
    queryFn: getAllFoods,
  });
  console.log(data);
  return (
    <div>
      <h1>All Food Items</h1>
    </div>
  );
};

export default AllFoodItems;
