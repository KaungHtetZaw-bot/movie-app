import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { api_key } from "../api";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useFetchMovies } from "../utils/help";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const fetchMovies = useFetchMovies();
  const movies = useSelector((state) => {
    state.movies.movies;
  });

  const Enter = async (movie) => {
    navigate(`/${movie.media_type}/${movie.id}`);
  };

  useEffect(() => {
    fetchMovies(`/trending/all/week?api_key=${api_key}`);
  }, []);
  return (
    <div className="container mx-auto mt-3">
      {!movies ? (
        <div>
          <MovieCard Enter={Enter} />
          <Footer />
        </div>
      ) : (
        <div class="flex items-center justify-center h-screen">
          <div class="relative">
            <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
