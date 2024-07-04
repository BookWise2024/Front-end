import React, { useEffect, useRef } from 'react';

const WidthScroll = ({ children }) => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let isDown = false;
        let startX;
        let scrollLeft;

        if (!slider) return;

        const handleMouseDown = (e) => {
            isDown = true;
            slider.classList.add("active");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            slider.classList.remove("pointer");
        };

        const handleMouseLeave = () => {
            isDown = false;
            slider.classList.remove("active");
            slider.classList.remove("pointer");
        };

        const handleMouseUp = () => {
            isDown = false;
            slider.classList.remove("active");
            slider.classList.remove("pointer");
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX;
            slider.scrollLeft = scrollLeft - walk;
            slider.classList.add("pointer");
        };

        slider.addEventListener("mousedown", handleMouseDown);
        slider.addEventListener("mouseleave", handleMouseLeave);
        slider.addEventListener("mouseup", handleMouseUp);
        slider.addEventListener("mousemove", handleMouseMove);

        return () => {
            slider.removeEventListener("mousedown", handleMouseDown);
            slider.removeEventListener("mouseleave", handleMouseLeave);
            slider.removeEventListener("mouseup", handleMouseUp);
            slider.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div ref={sliderRef}>{children}</div>;
};
  
  export default WidthScroll;