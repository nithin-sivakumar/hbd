import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import eatContent from "../data/eat";
import cake from "../assets/cake2.jpg";
import { BsFillCake2Fill } from "react-icons/bs";

const Eat = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);

    if (count + randomNum >= 100) {
      setCount(100);
    } else {
      setCount(count + randomNum);
    }

    // console.log(randomNum, count);
  };

  return (
    <div className="roboto-bold min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center p-10">
      <div className="flex items-center justify-center flex-col gap-5">
        <h2 className="text-xl font-semibold">{eatContent.title}</h2>
        <p className="text-justify max-w-lg">{eatContent.content}</p>
        <div className="flex flex-col sm:flex-row gap-5">
          <img
            src={cake}
            className={`max-w-[10rem] ${count === 100 && "hidden"}`}
            alt="Cake"
          />
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-lg bg-gray-700 rounded-full h-4">
          <div
            className={`h-4 rounded-full transition-all duration-300 ${
              count < 100 ? "bg-red-400" : "bg-green-500"
            }`}
            style={{ width: `${count}%` }}
          ></div>
        </div>
        <p className={`${count < 100 && "hidden"}`}>
          Oh, you ate it all. Very good, it was expired anyway (Just kidding)!
          Now click the button below.
        </p>

        {count < 100 ? (
          <button
            onClick={handleClick}
            className="bg-teal-300 hover:bg-lime-300 cursor-pointer px-8 py-2 rounded-full hover:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl font-bold text-black flex items-center justify-center gap-3"
          >
            <span className="font-bold">Eat Cake</span>
            <span>
              <BsFillCake2Fill />
            </span>
          </button>
        ) : (
          <button
            onClick={() => navigate("/gift")}
            className="bg-teal-300 hover:bg-lime-300 cursor-pointer px-8 py-2 rounded-full hover:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl font-bold text-black flex items-center justify-center gap-3"
          >
            <span className="font-bold">Next</span>
            <span>
              <FaArrowRight />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Eat;
