import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieDetailNavbar from "./MovieDetailNavbar";
import RelatedMovie from "./RelatedMovie";
import CreditsCard from "./CreditsCard";
import { useParams } from "react-router-dom";
import { api, api_key } from "../api";
import { useFetchMovies, useSelectedMovie } from "../utils/help";

const MovieDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const movie = useSelector((state) => state.movies.movie);
  const movies = useSelector((state) => state.movies.movies);
  const { movie_id, media_type } = useParams();
  const fetchMovieById = useSelectedMovie();
  const fetchingSimilarMovie = useFetchMovies();

  // const fetchCredits = async () => {
  //   try {
  //     const res = await api.get(
  //       `/${media_type}/${parseInt(movie_id)}/credits?api_key=${api_key}`
  //     );
  //     console.log("credits", res);
  //   } catch (error) {}
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await fetchMovieById(
          `/${media_type || "movie"}/${parseInt(movie_id)}?api_key=${api_key}`
        );
        await fetchingSimilarMovie(
          `/${media_type}/${movie_id}/similar?api_key=${api_key}`
        );
        // await fetchCredits();
      } catch (error) {
        console.log(error);
        setErr(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [movie_id, media_type, fetchMovieById, fetchingSimilarMovie]);

  return (
    <>
      {!isLoading ? (
        <div className="mt-3">
          <div
            style={{
              backgroundImage: `linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.6)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}
          >
            <div className="container flex flex-row  p-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="movie poster"
                className="rounded-xl w-full max-w-xs h-auto mx-auto lg:mx-0"
              />

              <div className="ml-5 flex flex-col justify-between p-2 text-white">
                <h1 className="text-3xl font-extrabold mb-2">
                  {movie.original_title || movie.name}
                </h1>

                <p>
                  <span className="font-semibold">Rating:</span> ⭐{" "}
                  {movie.vote_average?.toFixed(1) || "N/A"} (
                  {movie.vote_count?.toLocaleString() || 0} votes)
                </p>

                <div className="text-sm text-gray-300 space-y-4 mb-2">
                  <p>
                    <span className="font-semibold">Runtime:</span>{" "}
                    {movie.runtime} mins
                  </p>
                  <p>
                    <span className="font-semibold">Rating:</span> ⭐{" "}
                    {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
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
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
