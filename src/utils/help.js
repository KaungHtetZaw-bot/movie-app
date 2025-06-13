import { useDispatch } from "react-redux";
import { api } from "../api";
import {
  clearSelectedMovie,
  fetchTrendAll,
  fetchSeries,
  fetchMovies,
  selectedMovie,
} from "../redux/actions/movies";
import { useCallback } from "react";

export const useFetchTrendAll = () => {
  const dispatch = useDispatch();
  return useCallback(
    async (endpoint) => {
      try {
        const res = await api.get(endpoint);
        dispatch(fetchTrendAll(res?.data?.results));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );
};

export const useFetchSeries = () => {
  const dispatch = useDispatch();
  return useCallback(
    async (endpoint) => {
      try {
        const res = await api.get(endpoint);
        dispatch(fetchSeries(res?.data?.results));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );
};

export const useFetchMovies = () => {
  const dispatch = useDispatch();
  return useCallback(
    async (endpoint) => {
      try {
        const res = await api.get(endpoint);
        dispatch(fetchMovies(res?.data?.results));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );
};

export const useSelectedMovie = () => {
  const dispatch = useDispatch();
  return useCallback(
    async (endpoint) => {
      dispatch(clearSelectedMovie());
      try {
        const res = await api.get(endpoint);
        dispatch(selectedMovie(res?.data));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );
};
