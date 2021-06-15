import React, { useState } from "react";

const StarRating = () => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
            index += 1        
          return (         
            <span className="star">&#9733;</span>        
          );
        })}
      </div>
    );
  };

export default StarRating;