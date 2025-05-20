import { ActionTypes } from "../../actions/Action-Type";

const initialState = {
  movies: [],
  movie: {},
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case ActionTypes.SELECTED_MOVIE:
      return {
        ...state,
        movie: payload,
      };
    default:
      return state;
  }
};
