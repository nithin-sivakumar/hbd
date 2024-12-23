import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import cakeContent from "../data/cake";
import cake from "../assets/cake.jpg";

const Cake = () => {
  const navigate = useNavigate();

  return (
    <div className="roboto-bold min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center p-10">
      <div className="flex items-center justify-center flex-col gap-5">
        <h2 className="text-xl font-semibold">{cakeContent.title}</h2>
        <p className="text-justify max-w-lg">{cakeContent.content}</p>
        <div className="flex flex-col sm:flex-row gap-5">
          <img src={cake} className="max-w-[10rem]" />
        </div>
        <button
          onClick={() => navigate("/eat")}
          className="bg-teal-300 hover:bg-lime-300 cursor-pointer px-8 py-2 rounded-full hover:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl font-bold text-black flex items-center justify-center gap-3"
        >
          <span className="font-bold">Next</span>
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Cake;
