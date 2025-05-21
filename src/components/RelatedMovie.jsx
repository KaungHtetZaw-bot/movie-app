import React from "react";
import { api } from "../api";

const RelatedMovie = ({ movies }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap bg-gray-900 rounded-xl p-3 mt-4 select-none">
      <div className="mb-2 font-bold sticky">Related Movies</div>
      <div className="flex gap-3">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col items-center min-w-[120px]"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="movie poster"
              className="w-28 h-40 rounded-md object-cover"
            />
            <div className="text-center text-sm text-white mt-2 text-wrap">
              {movie.original_title || movie.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedMovie;
