import React, { useState, useEffect } from 'react';

function Slideshow({ images, slideDuration = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, [index, images.length, slideDuration]);

  return (
    <div className="slideshow">
      <img src={images[index]} alt="slideshow" />
    </div>
  );
}

export default Slideshow;
