import React from "react";
import homeContent from "../data/homepage";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="roboto-bold h-screen bg-[#0A0A0A] text-white flex items-center justify-center p-10">
      <div className="flex items-center justify-center flex-col gap-5">
        <h2 className="text-xl font-semibold">{homeContent.title}</h2>
        <p className="text-justify max-w-lg">{homeContent.content}</p>
        <button
          onClick={() => navigate("/greetings")}
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

export default HomePage;
