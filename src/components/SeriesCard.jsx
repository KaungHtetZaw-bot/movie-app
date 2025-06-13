import React from "react";
import { useSelector } from "react-redux";

const SeriesCard = () => {
  const series = useSelector((state) => state.movies.series);
  return (
    <div>
      <div className="bg-gray-800 mb-2 p-3 rounded-xl flex gap-4 items-center relatives">
        <h1 className="font-bold p-2">TRENDING SERIES</h1>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-3 m-2">
          {series && series.length > 0 ? (
            series.map((serie, index) => {
              return (
                <div
                  className="w-40 h-60 md:w-48 md:h-72 relative p-[3px] bg-gray-900 rounded-lg overflow-hidden text-white group hover:scale-[102%] transition-transform duration-300"
                  onClick={() => {
                    Enter(serie);
                  }}
                  key={index}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                    alt="movie poster"
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              );
            })
          ) : (
            <p>loading....</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeriesCard;
