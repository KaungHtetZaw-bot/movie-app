import React from "react";
import { useSelector } from "react-redux";
import MovieDetailNavbar from "./MovieDetailNavbar";
import RelatedMovie from "./RelatedMovie";

const MovieDetail = () => {
  const movie = useSelector((state) => state.movies.movie);
  return (
    <>
      <div className="container mt-3 p-2">
        <div className="flex flex-row bg-gray-800 p-2 rounded-t-xl">
          <div>
            <img
              src="/neo-movies-logo.png"
              alt="movie poster"
              className="w-50 h-80"
            />
          </div>
          <div className="ml-5 justify-around p-2">
            <div className="font-extrabold">MOVIE NAME</div>
            <p className="font-">release date : 2022</p>
            <div className="justify-around p-2">
              <div>runtime : 110 mins</div>
              <div>Rating : 4.5⭐</div>
              <div>Popularity : </div>
              <div>production countries :</div>
            </div>
            <div>
              genres : <span>Family</span> , <span>Family</span>,
              <span>Family</span>,<span>Family</span>
            </div>
          </div>
        </div>
        <MovieDetailNavbar />
        <RelatedMovie />
      </div>
    </>
  );
};

export default MovieDetail;
