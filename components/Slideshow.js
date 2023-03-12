import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = () => {

  const images = [
    "\axwell-wallet-TBTMYnlb7SM-unsplash.jpg",
    "\charlota-blunarova-r5xHI_H44aM-unsplash.jpg",
    "\waldemar-cue0DuZ8cUU-unsplash.jpg",
];
const buttonStyle = {
  width: "30px",
  background: 'none',
  border: '1px'
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
  nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}
    
    return (
        <>
            <Zoom {...properties} indicators={true} scale = {1.4} >
              {images.map((each, index) => {        
                return(
                  
                    <img key={index} className = "  object-fill shadow-lg h-400 w-screen -z-1"  alt="Slide Image" src={each} />
              

                )
                
              })}
                
            </Zoom>
            
        </>
    );
};

export default Slideshow;



