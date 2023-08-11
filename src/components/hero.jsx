import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";


const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1508853363419-a9263d752c59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
   
  },
  {
    url: "https://images.unsplash.com/photo-1507297448044-a99b358cd06e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1568&q=80",
 
  },
  {
    url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
   
  },
];
const divStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "110vh",
  backgroundSize: "cover ",
};
const spanStyles = {
  fontSize: "20px",
  background: "#efefef",
  color: "#000000",
};

const hero = () => {
  return (
    <>
    <div className="kulay">
      <div className="slide-container ">
        <Slide slidesToScroll={1} slidesToShow={1} indicators={true} >
          {slideImages.map((image, index) => (
            <div  key={index}>
              <div 
                style={{ ...divStyles, backgroundImage: `url(${image.url})` }}
              >
                <span style={spanStyles}>{image.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      </div>
    </>
  );
};
export default hero;