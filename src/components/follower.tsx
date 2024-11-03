"use client";

import React, { useState, useEffect } from "react";

function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="rounded-full"
        style={{
          position: "fixed",
          left: position.x + 10,
          top: position.y + 10,
          width: "10px",
          height: "10px",
          zIndex: 30,
          backgroundColor: "white",
          pointerEvents: "none",
          transition: "transform 0.3s ease-out",
        }}
      />
    </div>
  );
}

export default CursorFollower;
