import "./App.css";
import HeaderBar from "./components/HeaderBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import MovieDetail from "./components/MovieDetail";
import SortByMovie from "./components/SortByMovie";
import SortBySeries from "./components/SortBySeries";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <HeaderBar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/movie/:movie_id"} element={<MovieDetail />}></Route>
        <Route path={"/movie"} element={<SortByMovie />}></Route>
        <Route path={"/series"} element={<SortBySeries />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
