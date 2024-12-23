import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"; // Import the icon for the arrow
import { useNavigate } from "react-router-dom";

const Star = () => {
  const navigate = useNavigate();
  const [clickedStars, setClickedStars] = useState([]);
  const name = "Jaenelle";

  const handleStarClick = (index) => {
    if (clickedStars.length < name.length && !clickedStars.includes(index)) {
      setClickedStars([...clickedStars, index]);
    }
  };

  const getStarPosition = (index) => {
    const angle = (index / 15) * 2 * Math.PI; // Distribute stars in a circle
    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.35; // Dynamic radius based on screen size
    return {
      x: Math.cos(angle) * radius + window.innerWidth / 2,
      y: Math.sin(angle) * radius + window.innerHeight / 2,
    };
  };

  const getRandomSize = () => Math.random() * 3 + 1; // Random size between 1px and 4px
  const getRandomColor = () => `hsl(${Math.random() * 360}, 100%, 80%)`; // Random color

  const stars = Array(15).fill(0); // 15 stars in total

  useEffect(() => {
    // Handle window resize to update positions dynamically
    const handleResize = () => {
      setClickedStars([]);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center flex-col">
      {clickedStars.length === name.length ? (
        <h1 className="absolute top-8 text-white text-center p-2 text-2xl font-bold">
          You connected 8 stars and formed your constellation. Now stay mine
          till all those stars die 😍❤️.
        </h1>
      ) : (
        <h1 className="absolute top-8 text-white text-center p-2 text-2xl font-bold">
          Click the stars to connect them and form a constellation!
        </h1>
      )}
      {stars.map((_, index) => {
        const { x, y } = getStarPosition(index);
        const isClicked = clickedStars.includes(index);

        return (
          <motion.div
            key={index}
            className={`absolute rounded-full shadow-lg ${
              isClicked ? "bg-yellow-500" : "twinkling"
            }`}
            style={{
              width: isClicked ? "20px" : `${getRandomSize()}px`,
              height: isClicked ? "20px" : `${getRandomSize()}px`,
              top: y - 15,
              left: x - 15,
              cursor: "pointer",
              backgroundColor: isClicked ? "#F59E0B" : getRandomColor(),
              boxShadow: `0 0 15px 5px ${isClicked ? "#F59E0B" : "white"}`,
            }}
            onClick={() => handleStarClick(index)}
            whileHover={{ scale: 1.2 }}
            animate={{
              scale: isClicked ? 1.5 : 1,
              backgroundColor: isClicked ? "#F59E0B" : getRandomColor(),
            }}
            transition={{ duration: 0.3 }}
          />
        );
      })}
      {/* Draw lines between clicked stars */}
      <svg
        className="absolute inset-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        {clickedStars.map((star, index) => {
          if (index === 0) return null; // Skip the first star for line drawing
          const prevStar = clickedStars[index - 1];
          const { x: x1, y: y1 } = getStarPosition(prevStar);
          const { x: x2, y: y2 } = getStarPosition(star);

          return (
            <motion.line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="white"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          );
        })}
      </svg>
      {clickedStars.length === name.length && (
        <motion.div
          className="absolute text-white text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {name}
        </motion.div>
      )}

      {/* Button that appears at the bottom */}
      {clickedStars.length === name.length && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <button
            onClick={() => navigate("/photo")}
            className="bg-teal-300 hover:bg-lime-300 cursor-pointer px-8 py-2 rounded-full hover:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl font-bold text-black flex items-center justify-center gap-3"
          >
            <span className="font-bold">Next</span>
            <span>
              <FaArrowRight />
            </span>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Star;
