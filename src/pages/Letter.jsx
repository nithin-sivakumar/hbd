import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import letter from "../data/letter"; // Import the letter content
import { FaArrowRight } from "react-icons/fa"; // Import FaArrowRight for the icon

const InteractiveLoveLetter = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [font, setFont] = useState("serif");
  const [color, setColor] = useState("#fff"); // Default color
  const [hearts, setHearts] = useState([]); // Array to hold heart positions

  const navigate = useNavigate(); // Initialize the navigate function

  // Typewriter effect
  useEffect(() => {
    if (isTyping) {
      let index = 0;
      const interval = setInterval(() => {
        setText((prev) => prev + letter.content.charAt(index));
        index++;
        if (index === letter.content.length) clearInterval(interval);
      }, 50); // Adjust typing speed
      return () => clearInterval(interval);
    }
  }, [isTyping]);

  const startTyping = () => {
    setText(""); // Clear the text before starting typing
    setIsTyping(true);
  };

  const handleHeartClick = () => {
    // Add a new heart with random positions and animation
    const newHeart = {
      id: Date.now(),
      left: `${Math.random() * 100}vw`,
      bottom: `${Math.random() * 100}vh`,
    };
    setHearts((prevHearts) => [...prevHearts, newHeart]);

    // Remove heart after animation (optional for cleanup)
    setTimeout(() => {
      setHearts((prevHearts) =>
        prevHearts.filter((heart) => heart.id !== newHeart.id)
      );
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative">
      <h1 className="text-4xl font-bold mb-4">{letter.title}</h1>

      {/* Button to start typing the letter */}
      {!isTyping && (
        <button
          onClick={startTyping}
          className="bg-teal-300 hover:bg-lime-300 cursor-pointer px-8 py-2 rounded-full hover:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl font-bold text-black flex items-center justify-center gap-3 mt-8"
        >
          <span className="font-bold">Reveal</span>
          <FaArrowRight />
        </button>
      )}

      {/* Display the love letter with typewriter effect */}
      <div
        className="mt-8 text-center text-lg max-w-lg"
        style={{ fontFamily: font, color: color, whiteSpace: "pre-line" }}
      >
        {text}
      </div>

      {/* "I love you too" button and heart animation */}
      {isTyping && (
        <button
          onClick={handleHeartClick} // Trigger heart animation
          className="bg-teal-300 hover:bg-lime-300 cursor-pointer px-8 py-2 rounded-full hover:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl font-bold text-black flex items-center justify-center gap-3 mt-8"
        >
          <span className="font-bold">I love you too ❤️</span>
          {/* <FaArrowRight /> */}
        </button>
      )}

      {/* Render flying hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: heart.left,
            bottom: heart.bottom,
            animation: "fly 1s ease-out forwards", // Flying animation
          }}
        >
          <span
            role="img"
            aria-label="heart"
            className="text-3xl animate-pulse"
          >
            ❤️
          </span>
        </div>
      ))}
    </div>
  );
};

export default InteractiveLoveLetter;
