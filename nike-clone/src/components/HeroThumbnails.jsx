import React from "react";

const HeroThumbnails = (props) => {
  return (
    <div className="thumbnail-container">
      {props.testArr.map((image, index) => (
        <img
          src={image}
          key={index}
          alt=""
          onMouseEnter={() => props.handleEnter(image)}
        />
      ))}
    </div>
  );
};

export default HeroThumbnails;
