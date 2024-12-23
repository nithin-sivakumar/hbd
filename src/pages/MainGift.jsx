import React, { useState } from "react";
import { motion } from "framer-motion";
import rose from "../assets/rose.jpg";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const generateRandomColor = () => {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "teal",
    "black",
    "indigo",
  ];
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  return `linear-gradient(to top, ${color1}, ${color2})`;
};

const generateRandomSize = () => {
  const minSize = 64; // Tailwind's `min-w-16` and `min-h-16` corresponds to 4rem = 64px
  const maxSize = 120; // Define a reasonable max size
  const size = Math.floor(Math.random() * (maxSize - minSize + 1) + minSize);
  return { width: `${size}px`, height: `${size}px` };
};

const MainGift = () => {
  const navigate = useNavigate();
  const [currentBalloon, setCurrentBalloon] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const handleBalloonPop = () => {
    if (currentBalloon < 25) {
      setCurrentBalloon(currentBalloon + 1);
    } else {
      setIsComplete(true);
    }
  };

  // Generate random styles for the current balloon
  const balloonStyle = {
    background: generateRandomColor(),
    ...generateRandomSize(),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1F1F1F] text-white flex items-center justify-center p-10">
      <div className="flex flex-col items-center justify-center gap-10 text-center">
        {!isComplete ? (
          <>
            <h2 className="text-xl font-semibold">
              Pop all the balloons to reveal the surprise! (that's how many
              years you've lived for)
            </h2>
            <motion.div
              key={currentBalloon}
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100vh", opacity: 0 }}
              transition={{ type: "spring", stiffness: 50, damping: 10 }}
              className="relative flex flex-col items-center"
            >
              {/* Balloon Body */}
              <div
                className="relative rounded-full shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 min-w-16 min-h-16"
                onClick={handleBalloonPop}
                style={balloonStyle}
              >
                <motion.span
                  className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.1 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                  }}
                >
                  {currentBalloon}
                </motion.span>
                {/* Pop Effect */}
                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-white rounded-full"
                  style={{ display: currentBalloon === 1 ? "none" : "block" }}
                />
              </div>

              {/* Curved String */}
              <div className="absolute top-full">
                <svg
                  height="100"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-wiggle"
                >
                  <path
                    d="M15 0 Q20 25 10 50 Q20 75 15 100"
                    stroke="#ccc"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold">
              For Jaenelle, my one and only!
            </h2>
            <p className="text-lg max-w-md">
              You've popped all the balloons! Here's a special token of my love
              for you. ❤️
            </p>
            <motion.img
              src={rose}
              alt="Rose"
              className="w-40 h-40 rounded-full shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <p className="mt-3">
              Thanks for making my world brighter every day. I love you!
            </p>
            <button
              onClick={() => navigate("/star")}
              className="bg-teal-300 hover:bg-lime-300 cursor-pointer px-8 py-2 rounded-full hover:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl font-bold text-black flex items-center justify-center gap-3"
            >
              <span className="font-bold">Next</span>
              <span>
                <FaArrowRight />
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MainGift;
