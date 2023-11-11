import Lottie from "lottie-react";

import animation from "../assets/add.json";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";

const AddItem = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodCategory = form.foodCategory.value;
    const foodOrigin = form.foodOrigin.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const info = {
      email,
      foodName,
      foodImage,
      foodOrigin,
      price,
      quantity,
      description,
      rating,
      foodCategory,
    };
    const toastId = toast.loading("Adding item...");
    try {
      const send = await axios.post("/myAddedItems", info);
      console.log(send);
      if (send?.data?.acknowledged) {
        toast.success("Item added successfully!", { id: toastId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="my-7 text-center font-semibold text-3xl">Add Items</h1>
      <div className="p-4 md:p-0  my-10 md:h-[620px] mx-auto relative flex items-center flex-col md:flex-row lg:w-full lg:max-w-[70rem] w-[22rem] md:w-[44rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="p-10 relative w-full flex- md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border bg-center bg-cover">
          <Lottie animationData={animation}></Lottie>
        </div>

        <div className="pr-5 space-y-3 flex-1">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-3">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  placeholder="Food Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Food Name</span>
                </label>
                <input
                  type="text"
                  name="foodName"
                  placeholder="Food Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Food Category</span>
                </label>
                <input
                  type="text"
                  name="foodCategory"
                  placeholder="Food Category"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Food Origin</span>
                </label>
                <input
                  type="text"
                  name="foodOrigin"
                  placeholder="Country"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Food Image</span>
                </label>
                <input
                  type="url"
                  name="foodImage"
                  placeholder="Url"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
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
                  name="price"
                  placeholder="$ Price"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea
                className="textarea textarea-accent w-full h-16 max-h-28"
                name="description"
                placeholder="Description..."
                required
              ></textarea>
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
    </>
  );
};

export default AddItem;
