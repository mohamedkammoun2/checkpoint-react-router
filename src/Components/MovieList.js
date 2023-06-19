import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ list, deleteFunction, handleEdit }) => {
  console.log(list);
  //   console.log(list);
  return (
    <div className="movie-list">
      {list.map((el, i) => (
        <MovieCard
          key={i}
          movie={el}
          deleteMethode={deleteFunction}
          handleEdit={handleEdit}
          
        />
      ))}
    </div>
  );
};

export default MovieList;
