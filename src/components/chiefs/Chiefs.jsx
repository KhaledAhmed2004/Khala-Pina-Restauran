// import { useEffect } from "react";
import ChiefCard from "../card/chiefCard/ChiefCard";
// import AOS from "aos";
import "aos/dist/aos.css";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import foodAnimation from "../../assets/food.json";

const Chiefs = () => {
  const axios = useAxios();
  const getChiefs = async () => {
    const res = await axios.get("/chief");
    return res.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["chief"],
    queryFn: getChiefs,
  });

  if (isLoading) {
    return <Lottie animationData={foodAnimation}></Lottie>;
  }

  console.log("chife:", data);

  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <div className="my-9 space-y-8">
      <div>
        <h1 className="text-6xl font-semibold text-center">Our Chiefs</h1>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex-row lg:flex lg:w-[90%]  items-center justify-center w-[90%] md:w-[70%] mx-auto gap-8">
        {data?.map((chief) => (
          <ChiefCard key={chief._id} chief={chief}></ChiefCard>
        ))}
      </div>
    </div>
  );
};

export default Chiefs;
