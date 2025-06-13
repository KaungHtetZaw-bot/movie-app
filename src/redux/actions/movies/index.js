import { ActionTypes } from "../Action-Type";

export const fetchTrendAll = (trendAll) => {
  return {
    type: ActionTypes.FETCH_TRENDALL,
    payload: trendAll,
  };
};

export const fetchSeries = (series) => {
  return {
    type: ActionTypes.FETCH_SERIES,
    payload: series,
  };
};

export const fetchMovies = (movies) => {
  return {
    type: ActionTypes.FETCH_MOVIES,
    payload: movies,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: ActionTypes.SELECTED_MOVIE,
    payload: movie,
  };
};

export const clearSelectedMovie = (movie) => {
  return {
    type: ActionTypes.Clear_SELECTED_MOVIE,
  };
};
