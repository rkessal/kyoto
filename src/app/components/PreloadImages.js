"use client";
import { useEffect } from "react";

export default function PreloadImages({ images }) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return null
}