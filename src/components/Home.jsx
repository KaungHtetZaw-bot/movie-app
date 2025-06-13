import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { api_key } from "../api";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import {
  useFetchSeries,
  useFetchTrendAll,
  useFetchMovies,
} from "../utils/help";
import { useSelector } from "react-redux";
import TrendingMovie from "./TrendingMovie";
import SeriesCard from "./SeriesCard";

const Home = () => {
  const navigate = useNavigate();
  const fetchMovies = useFetchMovies();
  const fetchSeries = useFetchSeries();
  const fetchTrendAll = useFetchTrendAll();
  const movies = useSelector((state) => {
    state.movies.movies;
  });

  const Enter = async (movie) => {
    navigate(`/${movie.media_type}/${movie.id}`);
  };

  useEffect(() => {
    fetchTrendAll(`/trending/all/week?api_key=${api_key}`);
    fetchMovies(`/trending/movie/week?api_key=${api_key}`);
    fetchSeries(`/trending/tv/week?api_key=${api_key}`);
  }, []);
  return (
    <div className="container mx-auto mt-3">
      {!movies ? (
        <div>
          <TrendingMovie Enter={Enter} />
          <MovieCard Enter={Enter} />
          <SeriesCard Enter={Enter} />
          <Footer />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
