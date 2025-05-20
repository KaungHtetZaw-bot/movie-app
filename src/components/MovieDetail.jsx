import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieDetailNavbar from "./MovieDetailNavbar";
import RelatedMovie from "./RelatedMovie";
import { useParams } from "react-router-dom";
import { api, api_key } from "../api";
import { selectedMovie } from "../redux/actions/movies";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movie);
  const fetchMovieById = async (id) => {
    try {
      const res = await api.get(`/movie/${parseInt(id)}?api_key=${api_key}`);
      console.log(res);
      dispatch(selectedMovie(res.data));
    } catch (error) {}
  };

  const { movie_id } = useParams();
  useEffect(() => {
    if (!movie || movie.id !== parseInt(movie_id)) {
      fetchMovieById(movie_id);
    }
  }, [movie_id, movie]);

  return (
    <>
      {movie ? (
        <div className="container mt-3 p-2">
          <div className="flex flex-row bg-gray-800 p-2 rounded-t-xl">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="movie poster"
                className="w-50 h-80"
              />
            </div>
            <div className="ml-5 justify-around p-2">
              <div className="font-extrabold">{movie.original_title}</div>
              <p className="font-">release date : {movie.release_date}</p>
              <div className="justify-around p-2">
                <div>runtime : {movie.runtime} mins</div>
                <div>Rating : 4.5⭐</div>
                <div>Popularity : </div>
                <div>production countries :</div>
              </div>
              <div>
                genres:{" "}
                {movie.genres?.map((genre, idx) => (
                  <span key={genre.id}>
                    {genre.name} {idx < movie.genres.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <MovieDetailNavbar movie={movie} />
          <RelatedMovie />
        </div>
      ) : (
        <p>loading....</p>
      )}
    </>
  );
};

export default MovieDetail;
