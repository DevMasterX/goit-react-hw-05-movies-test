import { Navigate, Route, Routes } from "react-router-dom";
// import Lauout from "./Layout/Lauout";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movies/:movieId" element={<MovieDetails/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
};
