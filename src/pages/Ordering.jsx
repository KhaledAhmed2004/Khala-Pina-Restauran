// import Lottie from "lottie-react";
// import animation from "../assets/Animation - 1699643510853.json";
// import { Link, useLoaderData } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// const Ordering = () => {
//   const { user } = useAuth();
//   console.log(user);
//   const data = useLoaderData();
//   const { _id, foodName, price, quantity } = data;
//   const handleOrder = () => {
//     const { foodName, price, quantity } = infor;
//     console.log(infor);
//   };
//   return (
//     <div className="my-10 md:h-[400px] mx-auto relative flex flex-col md:flex-row lg:w-full lg:max-w-[48rem] w-[22rem] md:w-[44rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//       <div className="relative w-full flex-1 md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border bg-center bg-cover">
//         <Lottie animationData={animation}></Lottie>
//       </div>
//       <div className="p-6 space-y-3 flex-1">
//         <h5 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-[#2f2f2f]">
//           {foodName}
//         </h5>
//         <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
//           Name : {user.displayName}
//         </p>
//         <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
//           Email : {user.email}
//         </p>
//         <p className="block font-medium text-lg  text-[#626262] antialiased leading-relaxed text-inherit">
//           Available Quantity : {quantity}
//         </p>

//         <h1 className="text-lg text-[#2f2f2f] font-semibold">{`Price: $ ${price}`}</h1>

//         <div>
//           <Link
//             onClick={handleOrder}
//             // to={`/order/${_id}`}
//             className="md:mt-12 flex justify-center md:w-[80%] mx-auto bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium"
//           >
//             Order Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ordering;

import Lottie from "lottie-react";
import animation from "../assets/Animation - 1699643510853.json";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";

const Ordering = () => {
  const { user } = useAuth();
  // console.log(user);
  const data = useLoaderData();
  const axios = useAxios();
  const { foodImage, foodName, price } = data;

  // Define state for the order information
  const [orderInfo, setOrderInfo] = useState({
    foodName,
    price,
    foodImage,
    email: user?.email,
    userName: user?.displayName,
  });
  const handleOrder = async (e) => {
    e.preventDefault();
    const from = e.target;
    const date = from.date.value;
    const quantity = from.quantity.value;
    // console.log(date, quantity);

    const toastId = toast.loading("Ordering item...");
    try {
      const info = { ...orderInfo, quantity, date };
      const res = await axios.post("/purchaseOrders", info);
      if (res?.data?.acknowledged > 0) {
        toast.success("Ordered successfully!", { id: toastId });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  return (
    <div className="my-10 md:h-[500px] mx-auto relative flex flex-col md:flex-row lg:w-full lg:max-w-[48rem] w-[22rem] md:w-[44rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative w-full flex-1 md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border bg-center bg-cover">
        <Lottie animationData={animation}></Lottie>
      </div>
      {/* <div className="p-6 space-y-3 flex-1">
        <h5 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-[#2f2f2f]">
          {foodName}
        </h5>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Name: {user.displayName}
        </p>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Email: {user.email}
        </p>
        <p className="block font-medium text-lg  text-[#626262] antialiased leading-relaxed text-inherit">
          Available Quantity: {quantity}
        </p>

        <h1 className="text-lg text-[#2f2f2f] font-semibold">{`Price: $ ${price}`}</h1>

        <div>
          <Link
            onClick={handleOrder}
            // to={`/order/${_id}`} // If you want to navigate to the order page
            className="md:mt-12 flex justify-center md:w-[80%] mx-auto bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium"
          >
            Order Now
          </Link>
        </div>
      </div> */}
      <div className="pr-5 space-y-3 flex-1">
        <form onSubmit={handleOrder}>
          <div className="flex gap-3">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                placeholder="Food Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                name="foodName"
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                defaultValue={foodName}
                readOnly
                name="foodCategory"
                placeholder="Food Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                readOnly
                name="foodOrigin"
                placeholder="Price"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                defaultValue={getTodayDate()}
                placeholder="Add Date"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <h1 className="my-3 text-center">Add Quantity</h1>
          <div className="flex gap-3">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Add Quantity"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="md:mt-7 flex justify-center md:w-[80%] mx-auto bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium"
            >
              Add Items
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ordering;
