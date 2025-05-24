import { useDispatch } from "react-redux";
import { api } from "../api";
import { fetchMovies, selectedMovie } from "../redux/actions/movies";

export const useFetchMovies = () => {
  const dispatch = useDispatch();
  return async (endpoint) => {
    try {
      const res = await api.get(endpoint);
      dispatch(fetchMovies(res?.data?.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const useSelectedMovie = () => {
  const dispatch = useDispatch();
  return async (endpoint) => {
    try {
      const res = await api.get(endpoint);
      dispatch(selectedMovie(res?.data));
    } catch (error) {
      console.log(error);
    }
  };
};
