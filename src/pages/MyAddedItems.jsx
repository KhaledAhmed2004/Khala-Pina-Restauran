// import { useQuery } from "@tanstack/react-query";
// import useAxios from "../hooks/useAxios";
// import foodAnimation from "../assets/food.json";
// import Lottie from "lottie-react";
// import { Link } from "react-router-dom";
// import { FcViewDetails } from "react-icons/fc";
// import { AiFillStar } from "react-icons/ai";

// const MyAddedItems = () => {
//   const axios = useAxios();
//   const getMyAddedItems = async () => {
//     const res = await axios.get("/myAddedItems");
//     return res.data;
//   };

//   const { data, isLoading } = useQuery({
//     queryKey: ["myAddedItems"],
//     queryFn: getMyAddedItems,
//   });

//   if (isLoading) {
//     return <Lottie className="h-[600px]" animationData={foodAnimation} />;
//   }

//   return (
//     <div className="bg-green-950 flex">

//       <div className="my-12 flex bg-blue-600">
//         <div className="mb-5 w-[330px] lg:mb-7 relative flex-col text-gray-700 bg-whit shadow-md rounded-xl bg-clip-border bg-red-600 flex">
//           {data.map((item) => (
//             <div key={item._id}>
//               <div
//                 style={{
//                   backgroundImage: `url(${item.foodImage})`,
//                 }}
//                 className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 bg-cover bg-center hover:scale-105 duration-200 ease-in"
//               ></div>
//               <div className="p-6">
//                 <div className="flex justify-between">
//                   <h1 className="text-lg text-[#626262] font-normal">
//                     {item.foodCategory}
//                   </h1>
//                   <h1 className="text-xl text-[#fe8109] font-semibold flex items-center">
//                     <AiFillStar />
//                     <span className="text-lg font-medium">{item.rating}</span>
//                   </h1>
//                 </div>
//                 <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[#2f2f2f]">
//                   {item.foodName}
//                 </h5>
//                 <p className="block font-medium text-lg  text-[#626262] antialiased leading-relaxed text-inherit">
//                   Available Quantity : {item.quantity}
//                 </p>
//                 <h1 className="text-lg text-[#2f2f2f] font-semibold">{`Price: $ ${item.price}`}</h1>
//               </div>
//               <div className="p-6 pt-0">
//                 <Link
//                   to={`/food/${item._id}`}
//                   className="mt-2 bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium flex items-center justify-center gap-2"
//                 >
//                   <FcViewDetails /> View Details
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyAddedItems;

// import { useQuery } from "@tanstack/react-query";
// import useAxios from "../hooks/useAxios";
// import foodAnimation from "../assets/food.json";
// import Lottie from "lottie-react";
// import { Link } from "react-router-dom";
// import { FcViewDetails } from "react-icons/fc";
// import { AiFillStar } from "react-icons/ai";
// import { auth } from "../config/firebase.config";

// const MyAddedItems = () => {
//   const axios = useAxios();
//   const getMyAddedItems = async () => {
//     const email = auth.currentUser.email;
//     console.log(email);
//     const res = await axios.get(`/myAddedItems?email=${email}`);
//     return res.data;
//   };

//   const { data, isLoading } = useQuery({
//     queryKey: ["myAddedItems"],
//     queryFn: getMyAddedItems,
//   });

//   if (isLoading) {
//     return <Lottie className="h-[600px]" animationData={foodAnimation} />;
//   }

//   return (
//     <h1>hi</h1>
//     // <div className="grid grid-cols-3 gap-8 mt-10">
//     //   {data.map((item) => (
//     //     <div
//     //       key={item._id}
//     //       className="mb-5 w-[330px] lg:mb-7 relative flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border flex"
//     //     >
//     //       <div
//     //         style={{
//     //           backgroundImage: `url(${item.foodImage})`,
//     //         }}
//     //         className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 bg-cover bg-center hover:scale-105 duration-200 ease-in"
//     //       ></div>
//     //       <div className="p-6">
//     //         <div className="flex justify-between">
//     //           <h1 className="text-lg text-[#626262] font-normal">
//     //             {item.foodCategory}
//     //           </h1>
//     //           <h1 className="text-xl text-[#fe8109] font-semibold flex items-center">
//     //             <AiFillStar />
//     //             <span className="text-lg font-medium">{item.rating}</span>
//     //           </h1>
//     //         </div>
//     //         <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[#2f2f2f]">
//     //           {item.foodName}
//     //         </h5>
//     //         <p className="block font-medium text-lg  text-[#626262] antialiased leading-relaxed text-inherit">
//     //           Available Quantity : {item.quantity}
//     //         </p>
//     //         <h1 className="text-lg text-[#2f2f2f] font-semibold">{`Price: $ ${item.price}`}</h1>
//     //       </div>
//     //       <div className="p-6 pt-0">
//     //         <Link
//     //           to={`/food/${item._id}`}
//     //           className="mt-2 bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium flex items-center justify-center gap-2"
//     //         >
//     //           <FcViewDetails /> View Details
//     //         </Link>
//     //       </div>
//     //     </div>
//     //   ))}
//     // </div>
//   );
// };

// export default MyAddedItems;

// import { useQuery } from "@tanstack/react-query";
// import useAxios from "../hooks/useAxios";
// import foodAnimation from "../assets/food.json";
// import Lottie from "lottie-react";
// import { Link } from "react-router-dom";
// import { FcViewDetails } from "react-icons/fc";
// import { AiFillStar } from "react-icons/ai";
// import { auth } from "../config/firebase.config";

// const MyAddedItems = () => {
//   const axios = useAxios();
//   const email = auth?.currentUser?.email;

//   const { data, isLoading } = useQuery({
//     queryKey: ["myAddedItems"],
//     queryFn: async () => {
//       const res = await axios.get(`/myAddedItems?email=khaledahmed@gmail.com`);
//       return res.data;
//     },
//   });

//   if (isLoading) {
//     return <Lottie className="h-[600px]" animationData={foodAnimation} />;
//   }

//   if (!data || data.length === 0) {
//     return (
//       <h2 className="h-[500px] flex items-center justify-center text-3xl font-semibold">
//         No items found.
//       </h2>
//     );
//   }

//   return (
//     <div className="grid grid-cols-3 gap-8 mt-10">
//       {data.map((item) => (
//         <div
//           key={item._id}
//           className="mb-5 w-[330px] lg:mb-7 relative flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border flex"
//         >
//           <div
//             style={{
//               backgroundImage: `url(${item.foodImage})`,
//             }}
//             className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 bg-cover bg-center hover:scale-105 duration-200 ease-in"
//           ></div>
//           <div className="p-6">
//             <div className="flex justify-between">
//               <h1 className="text-lg text-[#626262] font-normal">
//                 {item.foodCategory}
//               </h1>
//               <h1 className="text-xl text-[#fe8109] font-semibold flex items-center">
//                 <AiFillStar />
//                 <span className="text-lg font-medium">{item.rating}</span>
//               </h1>
//             </div>
//             <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[#2f2f2f]">
//               {item.foodName}
//             </h5>
//             <p className="block font-medium text-lg  text-[#626262] antialiased leading-relaxed text-inherit">
//               Available Quantity : {item.quantity}
//             </p>
//             <h1 className="text-lg text-[#2f2f2f] font-semibold">{`Price: $ ${item.price}`}</h1>
//           </div>
//           <div className="p-6 pt-0">
//             <Link
//               to={`/food/${item._id}`}
//               className="mt-2 bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium flex items-center justify-center gap-2"
//             >
//               <FcViewDetails /> View Details
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyAddedItems;

import { GrUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import foodAnimation from "../assets/food.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { auth } from "../config/firebase.config";
import toast from "react-hot-toast";

const MyAddedItems = () => {
  const axios = useAxios();
  const email = auth?.currentUser?.email;
  console.log(email);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myAddedItems", email],
    queryFn: async () => {
      const res = await axios.get(`/myAddedItems?email=${email}`);
      console.log("url", `/myAddedItems?email=${email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Lottie className="h-[600px]" animationData={foodAnimation} />;
  }

  if (!data || data.length === 0) {
    return (
      <h2 className="h-[500px] flex items-center justify-center text-3xl font-semibold">
        No items found.
      </h2>
    );
  }

  const handleUpdate = async (id) => {};

  const handleDelete = async (id) => {
    const res = await axios.delete(`/myAddedItems/${id}`);
    if (res.data.deletedCount > 0) {
      toast.success("Delete successfully");
      refetch();
    }
    console.log(res);
  };

  return (
    <div className="grid grid-cols-3 gap-8 mt-10">
      {data.map((item) => (
        <div
          key={item._id}
          className="mb-5 w-[330px] lg:mb-7 relative flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border flex"
        >
          <div
            style={{
              backgroundImage: `url(${item.foodImage})`,
            }}
            className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 bg-cover bg-center hover:scale-105 duration-200 ease-in"
          ></div>
          <div className="p-6">
            <div className="flex justify-between">
              <h1 className="text-lg text-[#626262] font-normal">
                {item.foodCategory}
              </h1>
              <h1 className="text-xl text-[#fe8109] font-semibold flex items-center">
                <AiFillStar />
                <span className="text-lg font-medium">{item.rating}</span>
              </h1>
            </div>
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[#2f2f2f]">
              {item.foodName}
            </h5>
            <p className="block font-medium text-lg  text-[#626262] antialiased leading-relaxed text-inherit">
              Available Quantity : {item.quantity}
            </p>
            <h1 className="text-lg text-[#2f2f2f] font-semibold">{`Price: $ ${item.price}`}</h1>
          </div>
          <div className="p-6 pt-0 items-center flex justify-center gap-2">
            <Link
              to={`/update/${item._id}`}
              onClick={() => handleUpdate(item._id)}
              className="mt-2 bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium flex items-center justify-center gap-2"
            >
              <GrUpdate></GrUpdate> Update
            </Link>
            <button
              onClick={() => handleDelete(item._id)}
              className="mt-2 bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium flex items-center justify-center gap-2"
            >
              <AiFillDelete></AiFillDelete> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAddedItems;
