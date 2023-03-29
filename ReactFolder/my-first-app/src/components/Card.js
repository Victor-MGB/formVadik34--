import React from "react";
const Card =({movies}) =>{
    return (
      <div className="cardlist">
        {movies
          ?.filter((movie) => movie.poster)
          ?.map((movie, index) => (
            <div className="card" key={index}>
              <img src={movie.poster} alt={movie.title} />
            </div>
          ))}
      </div>
    );
};
export default Card;