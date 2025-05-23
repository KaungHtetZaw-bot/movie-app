import React from "react";
import { useSelector } from "react-redux";

const MovieCard = ({ Enter }) => {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4">
        {movies && movies.length > 0 ? (
          movies.map((movie, index) => {
            return (
              <div
                className="w-[100px] lg:max-w-[240px] md:w-[160px] md:max-w-[130px] h-50 lg:h-80 md:h-60 relative bg-gray-900 rounded-lg overflow-hidden text-white group hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  Enter(movie);
                }}
                key={index}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="movie poster"
                  className="w-full h-full"
                />
                {/* <div className="p-2">
                  <h1 className="text-sm font-bold truncate">
                    {movie.original_title || movie.name}
                  </h1>
                </div> */}
                {/* <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
                  }}
                >
                  <div className="absolute inset-0 flex flex-col justify-center items-center space-y-2 p-4 text-white">
                    <h3 className="text-[10px] font-semibold">
                      {movie.overview.length > 150
                        ? movie.overview.slice(0, 150) + "..."
                        : movie.overview}
                    </h3>
                    <p className="text-yellow-400 text-sm">⭐ 8.5</p>
                    <button
                      onClick={() => {
                        Enter(movie);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-xs px-3 py-1 rounded"
                    >
                      Watch
                    </button>
                  </div>
                </div> */}
              </div>
            );
          })
        ) : (
          <p>loading....</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
