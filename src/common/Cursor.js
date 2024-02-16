import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Get the cursor variant from Redux state
  const cursorVariant = useSelector((state) => state.cursor.variant);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const cursorWidth = 120;
  const cursorHeight = 120;
  const variants = {
    default: { x: mousePosition.x - 16, y: mousePosition.y - 16 },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    cardIn: {
      x: mousePosition.x - cursorWidth / 2,
      y: mousePosition.y - cursorHeight / 2,
      width: cursorWidth,
      height: cursorHeight,
      text: "view",
      cursor: "none",
    },
  };

  return (
    <motion.div
      className="cursor fixed top-0 left-0 pointer-events-none z-50 rounded-circle bg-primary"
      custom="div" // Use motion.custom to define custom HTML tags
      variants={variants}
      animate={cursorVariant}
    />
  );
};

export default Cursor;
