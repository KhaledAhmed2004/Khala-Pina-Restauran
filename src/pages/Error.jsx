import Lottie from "lottie-react";
import animation from "../assets/404.json";
const Error = () => {
  return (
    <div className="">
      <Lottie className="h-[100vh]  mx-auto p-10" animationData={animation} />
    </div>
  );
};

export default Error;
