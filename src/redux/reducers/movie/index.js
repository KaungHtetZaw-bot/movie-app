import { ActionTypes } from "../../actions/Action-Type";

const initialState = {
  trendAll: [],
  series: [],
  movies: [],
  movie: {},
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_TRENDALL:
      return {
        ...state,
        trendAll: payload,
      };

    case ActionTypes.FETCH_SERIES:
      return {
        ...state,
        series: payload,
      };

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
    case ActionTypes.Clear_SELECTED_MOVIE:
      return {};
    default:
      return state;
  }
};
