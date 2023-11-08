import { BsFacebook, BsInstagram, BsTwitter, BsTelegram } from "react-icons/bs";

const ChiefCard = () => {
  return (
    <div className="h-[325px] w-[240px] border-2 rounded-xl cursor-pointer overflow-hidden">
      <div className="h-[250px] w-full p-1">
        <div className="h-full w-full rounded-xl bg-[url('https://i.ibb.co/hmW29qS/brooke-cagle-Wf-V4-Kscvv-BQ-unsplash.jpg')] bg-cover bg-center transition-all hover:scale-[1.02] duration-200 overflow-hidden"></div>
      </div>
      <div className=" space-y-3">
        <h1 className="text-center text-base text-[#2f2f2f] font-normal ml-1">
          Khaled Ahmed
        </h1>
        <div className="flex text-xl gap-5 justify-center text-gray-600">
          <BsFacebook className="hover:scale-110 duration-200"></BsFacebook>
          <BsInstagram className="hover:scale-110 duration-200"></BsInstagram>
          <BsTwitter className="hover:scale-110 duration-200"></BsTwitter>
          <BsTelegram className="hover:scale-110 duration-200"></BsTelegram>
        </div>
      </div>
    </div>
  );
};

export default ChiefCard;
