import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { fetchMovies, selectedMovie } from "../redux/actions/movies";
import { api, api_key } from "../api";
import Footer from "./Footer";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchingMovies = async () => {
    try {
      const res = await api.get(`/trending/movie/week?api_key=${api_key}`);
      // console.log(res?.data?.results);
      dispatch(fetchMovies(res?.data?.results));
    } catch (error) {}
  };

  const Enter = async (movie) => {
    try {
      const res = await api.get(`/movie/${movie.id}?api_key=${api_key}`);
      console.log(res?.data);
      dispatch(selectedMovie(res?.data));
      navigate(`/movie/${movie.original_title}`);
    } catch (error) {}
  };

  useEffect(() => {
    fetchingMovies();
  }, []);
  return (
    <div className="container mx-auto mt-3">
      <MovieCard Enter={Enter} />
      <Footer />
    </div>
  );
};

export default Home;
