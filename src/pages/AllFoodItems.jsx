// import { useQuery } from "@tanstack/react-query";
// import useAxios from "./../hooks/useAxios";
// import AllFoodCard from "../components/card/foodCard/AllFoodCard";
// import { useState } from "react";
// import Lottie from "lottie-react";
// import foodAnimation from "../assets/food.json";
// const AllFoodItems = () => {
//   const [foodName, setFoodName] = useState("");
//   console.log(foodName);
//   const [page, setPage] = useState(0);
//   const axios = useAxios();
//   const getAllFoods = async () => {
//     const res = await axios.get(`/foodItems?page=${page}&foodName=${foodName}`);
//     return res.data;
//   };
//   const { data, isLoading } = useQuery({
//     queryKey: ["allFoods", page, foodName],
//     queryFn: getAllFoods,
//   });
//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <Lottie animationData={foodAnimation} />
//       </div>
//     );
//   }
//   console.log(data);
//   return (
//     <div className="my-10">
//       <div className="h-[150px] flex flex-col items-center justify-center">
//         <h1 className="mb-2">Search your Favorite</h1>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//           }}
//         >
//           <div className="form-control ">
//             <div className="input-group">
//               <input
//                 onBlur={(e) => setFoodName(e.target.value)}
//                 type="text"
//                 placeholder="Search…"
//                 className="px-5 w-[300px] border-2 border-[#2f2f2f]"
//               />
//               <button className="btn btn-square border-black border-l-0 border-r-2 border-t-2 border-b-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 lg:gap-5 w-[70%] md:w-[75%] lg:w-[80%] mx-auto mt-10">
//         {data?.map((food) => (
//           <AllFoodCard key={food._id} food={food} />
//         ))}
//       </div>
//       <div className="join flex justify-center">
//         <button
//           className={`join-item btn ${page === 0 ? "btn-active" : ""}`}
//           onClick={() => setPage(page - 1)}
//         >
//           1
//         </button>
//         <button
//           className={`join-item btn ${page === 1 ? "btn-active" : ""}`}
//           onClick={() => setPage(page + 1)}
//         >
//           2
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AllFoodItems;

import { useQuery } from "@tanstack/react-query";
import useAxios from "./../hooks/useAxios";
import AllFoodCard from "../components/card/foodCard/AllFoodCard";
import { useState } from "react";
import Lottie from "lottie-react";
import foodAnimation from "../assets/food.json";

const AllFoodItems = () => {
  const [foodName, setFoodName] = useState("");
  const [page, setPage] = useState(0);
  const axios = useAxios();

  const getAllFoods = async () => {
    const res = await axios.get(`/foodItems?page=${page}&foodName=${foodName}`);
    return res.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["allFoods", page, foodName],
    queryFn: getAllFoods,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="my-10">
      <div className="h-[150px] flex flex-col items-center justify-center">
        <h1 className="mb-2">Search your Favorite</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="input-group">
              <input
                onChange={(e) => setFoodName(e.target.value)}
                type="text"
                placeholder="Search food name"
                className="px-5 w-[300px] border-2 border-[#2f2f2f]"
              />
              <button
                type="submit"
                className="btn btn-square border-black border-l-0 border-r-2 border-t-2 border-b-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Lottie animationData={foodAnimation} />
        </div>
      ) : isError ? (
        <div>Error loading data</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 lg:gap-5 w-[70%] md:w-[75%] lg:w-[80%] mx-auto mt-10">
          {data?.map((food) => (
            <AllFoodCard key={food._id} food={food} />
          ))}
        </div>
      )}
      <div className="join flex justify-center">
        <button
          className={`join-item btn ${page === 0 ? "btn-active" : ""}`}
          onClick={() => setPage(page - 1)}
        >
          1
        </button>
        <button
          className={`join-item btn ${page === 1 ? "btn-active" : ""}`}
          onClick={() => setPage(page + 1)}
        >
          2
        </button>
      </div>
    </div>
  );
};

export default AllFoodItems;
