import React, { useEffect, useState } from "react";

const NeonBackground = () => {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const generateBalls = () => {
      const newBalls = Array.from({ length: 80 }).map(() => ({
        x: Math.random() * 100, // vw
        y: Math.random() * 100, // vh
        size: 4 + Math.random() * 6, // size in px
        animationDuration: 10 + Math.random() * 20,
        animationDelay: Math.random() * 10,
      }));
      setBalls(newBalls);
    };

    generateBalls();
    const interval = setInterval(generateBalls, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 bg-black">
      {balls.map((ball, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-red-500"
          style={{
            left: `${ball.x}vw`,
            top: `${ball.y}vh`,
            width: `${ball.size}px`,
            height: `${ball.size}px`,
            animation: `float ${ball.animationDuration}s linear infinite`,
            animationDelay: `${ball.animationDelay}s`,
            boxShadow: "0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000",
          }}
        />
      ))}

      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
              opacity: 1;
            }
            100% {
              transform: translateY(-100vh);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default NeonBackground;
