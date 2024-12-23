import React from "react";
import { motion } from "framer-motion";
import photo from "../assets/photo.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DigitalPortrait = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center">
      <h1 className="absolute top-8 text-white text-center p-2 text-2xl font-bold">
        I love you sooooo much ❤️
      </h1>

      {/* Motion Image with "drawing" effect */}
      <motion.img
        src={photo}
        alt="Digital Portrait"
        className="w-auto h-auto max-w-[500px] max-h-[500px] border-white border-2"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0 0)" }} // Start by hiding the image from top
        transition={{
          duration: 30, // Adjust the duration for how long the "drawing" effect takes
          ease: "easeInOut",
        }}
      />
      <h1 className="absolute bottom-8">
        <button
          onClick={() => navigate("/letter")}
          className="bg-teal-300 hover:bg-lime-300 cursor-pointer px-8 py-2 rounded-full hover:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl font-bold text-black flex items-center justify-center gap-3"
        >
          <span className="font-bold">Next</span>
          <span>
            <FaArrowRight />
          </span>
        </button>
      </h1>
    </div>
  );
};

export default DigitalPortrait;
