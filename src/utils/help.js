import { useDispatch } from "react-redux";
import { api } from "../api";
import { clearSelectedMovie, selectedMovie } from "../redux/actions/movies";
import { useCallback } from "react";

export const useFetch = () => {
  const dispatch = useDispatch();
  return useCallback(
    async (endpoint, actionCreator) => {
      try {
        const res = await api.get(endpoint);
        if (actionCreator) {
          dispatch(actionCreator(res?.data?.results));
        } else {
          console.log("no action creator provided");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    [dispatch]
  );
};

// export const useFetchImg = () => {
//   return useCallback(async (src) => {
//     new Promise((resolve) => {
//       if (!src) {
//         resolve(false);
//         return;
//       }
//     });
//     const img = new Image();
//     img.onload = () => resolve(true);
//     img.onerror = () => resolve(false);
//     img.src = src;
//   }, []);
// };

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
