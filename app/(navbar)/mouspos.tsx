"use client";
import { rejects } from "assert";
import { useState, useEffect, MouseEvent } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rect = useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({
        x: ev.clientX,
        y: ev.clientY,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;
