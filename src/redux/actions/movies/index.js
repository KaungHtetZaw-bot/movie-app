import { ActionTypes } from "../Action-Type";

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
