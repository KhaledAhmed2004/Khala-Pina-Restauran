import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import foodAnimation from "../assets/food.json";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { auth } from "../config/firebase.config";

const MyOrder = () => {
  const { user } = useAuth();
  console.log(user?.email);
  const emailAuth = auth?.currentUser?.email;
  console.log(emailAuth);
  const axios = useAxios();
  const email = auth?.currentUser?.email;
  console.log(email);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myAddedItems", email],
    queryFn: async () => {
      const res = await axios.get(`/purchaseOrders?email=${user?.email}`);
      console.log("url", `/myAddedItems?email=${email}`);
      return res.data;
    },
  });
  console.log(data);
  if (isLoading) {
    return (
      <Lottie className="h-[600px]" animationData={foodAnimation}></Lottie>
    );
  }
  const handleDelete = async (id) => {
    const res = await axios.delete(`/purchaseOrders/${id}`);
    if (res.data.deletedCount > 0) {
      toast.success("Delete successfully");
      refetch();
    }
    console.log(res);
  };
  return (
    <div className="my-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          {data.map((order, idx) => (
            <tbody key={idx}>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={order.foodImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order.foodName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {order.userName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {order.date}
                  </span>
                </td>
                <td>{order.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(order._id)}
                    to="/registration"
                    className="border-2 dark:text-white border-green-500 hover:border-green-800 rounded-full py-2 px-6 font-medium uppercase text-lg hover:scale-105 transition-all duration-200 ease-in flex justify-center items-center mx-auto"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
