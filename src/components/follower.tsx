"use client";

import React, { useState, useEffect } from "react";

function CursorFollower() {
  // State to track cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Event listener to update position on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Follower element */}
      <div
        className="rounded-full"
        style={{
          position: "fixed",
          left: position.x + 10, // Offset to the right
          top: position.y + 10, // Offset to the bottom
          width: "10px",
          height: "10px",
          zIndex: 30,
          backgroundColor: "white",
          pointerEvents: "none", // Prevents interfering with other elements
          transition: "transform 0.3s ease-out", // Smooth follow effect
        }}
      />
    </div>
  );
}

export default CursorFollower;
