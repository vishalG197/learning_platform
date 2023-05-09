import { Box, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import img1 from "../Images/Screenshot 2023-05-05 182808.png"
import CourseCard from "./CourseCard";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    <CourseCard/>,<CourseCard/>,<CourseCard/>,<CourseCard/>
  ];
  const intervalTime = 3000; // 3 seconds

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, intervalTime);

    return () => clearInterval(intervalId);
  }, [slideIndex]);

  return (
    <Box>
     
       <CourseCard/>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        {slides.map((_, idx) => (
          <span
            key={idx}
            style={{
              margin: "0 5px",
              borderRadius: "50%",
              width: "15px",
              height: "8px",
              backgroundColor: slideIndex === idx ? "blue" : "gray",
            }}
          />
        ))}
      </Box>
     
    </Box>
  );
};

export default Slider;
