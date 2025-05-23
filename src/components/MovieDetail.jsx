import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieDetailNavbar from "./MovieDetailNavbar";
import RelatedMovie from "./RelatedMovie";
import CreditsCard from "./CreditsCard";
import { useParams } from "react-router-dom";
import { api, api_key } from "../api";
import { fetchMovies, selectedMovie } from "../redux/actions/movies";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movie);
  const movies = useSelector((state) => state.movies.movies);
  const { movie_id, media_type } = useParams();
  const fetchMovieById = async () => {
    try {
      const res = await api.get(
        `/${media_type}/${parseInt(movie_id)}?api_key=${api_key}`
      );
      console.log(res);
      dispatch(selectedMovie(res.data));
    } catch (error) {}
  };

  const fetchCredits = async () => {
    try {
      const res = await api.get(
        `/${media_type}/${parseInt(movie_id)}/credits?api_key=${api_key}`
      );
      console.log("credits", res);
    } catch (error) {}
  };

  const fetchingSimilarMovie = async () => {
    try {
      const res = await api.get(
        `/${media_type}/${movie_id}/similar?api_key=${api_key}`
      );
      dispatch(fetchMovies(res?.data?.results));
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovieById();
    fetchingSimilarMovie();
    fetchCredits();
  }, []);

  return (
    <>
      {movie ? (
        <div className="mt-3">
          <div
            style={{
              backgroundImage: `linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.6)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}
          >
            <div className="container flex flex-row  p-4 backgrounImage">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="movie poster"
                className="rounded-xl w-full max-w-xs h-auto mx-auto lg:mx-0"
              />

              <div className="ml-5 flex flex-col justify-between p-2 text-white">
                <h1 className="text-3xl font-extrabold mb-2">
                  {movie.original_title || movie.name}
                </h1>

                <p className="text-sm text-gray-300 mb-1">
                  <span className="font-semibold">Release Date:</span>{" "}
                  {movie.release_date}
                </p>

                <div className="text-sm text-gray-300 space-y-4 mb-2">
                  <p>
                    <span className="font-semibold">Runtime:</span>{" "}
                    {movie.runtime} mins
                  </p>
                  <p>
                    <span className="font-semibold">Rating:</span> ⭐ 4.5
                  </p>
                  <p>
                    <span className="font-semibold">Popularity:</span>{" "}
                    {movie.popularity}
                  </p>
                  <p>
                    <span className="font-semibold">Countries : </span>
                    {movie.production_countries?.map((c, idx) => (
                      <span key={idx}>
                        {c.name}
                        {idx < movie.production_countries.length - 1
                          ? ", "
                          : ""}
                      </span>
                    ))}
                  </p>
                </div>

                <p className="text-sm text-gray-300 mb-2">
                  <span className="font-semibold">Genres:</span>{" "}
                  {movie.genres?.map((genre, idx) => (
                    <span key={genre.id}>
                      {genre.name} {idx < movie.genres.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>

                {movie.tagline && (
                  <p className="italic text-yellow-400 text-md mb-2">
                    "{movie.tagline}"
                  </p>
                )}

                <div>
                  <h2 className="text-lg font-semibold mb-1">Overview</h2>
                  <p className="text-sm text-gray-300 leading-relaxed text-wrap">
                    {movie.overview}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CreditsCard />
          <MovieDetailNavbar movie={movie} />
          <RelatedMovie movies={movies} />
        </div>
      ) : (
        <p>loading....</p>
      )}
    </>
  );
};

export default MovieDetail;
