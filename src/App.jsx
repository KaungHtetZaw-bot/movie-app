import "./App.css";
import HeaderBar from "./components/HeaderBar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home";
import MovieDetail from "./components/MovieDetail";
import SortByMovie from "./components/SortByMovie";
import SortBySeries from "./components/SortBySeries";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import NotFound from "./components/NotFound";
import AuthScreen from "./components/auth/AuthScreen";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();
  const hideHeaderRoutes = ["/signup", "/signin", "/"];
  return (
    <div>
      {!hideHeaderRoutes.includes(location.pathname) && <HeaderBar />}

      <Routes>
        <Route path={"/"} element={<AuthScreen />}></Route>
        <Route
          path={"/home"}
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={"/:media_type/:movie_id"}
          element={
            <ProtectedRoute>
              <MovieDetail />
            </ProtectedRoute>
          }
        ></Route>
        <Route path={"/signup"} element={<SignUp />}></Route>
        <Route path={"/signin"} element={<SignIn />}></Route>
        <Route
          path={"/movie"}
          element={
            <ProtectedRoute>
              <SortByMovie />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={"/series"}
          element={
            <ProtectedRoute>
              <SortBySeries />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
