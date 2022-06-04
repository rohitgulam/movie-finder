import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./views/Home";
import MovieDetails from "./Components/MovieDetails";
import SearchPage from "./Components/SearchBar";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={< MovieDetails/>} />
      </Routes>
    </>
  );
}

export default App;
