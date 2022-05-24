import "./App.css";
import Navigation from "./Components/Navigation";
import Recommended from "./pages/Recommended";
import { Routes, Route } from "react-router-dom";
import MostRated from "./pages/MostRated";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Recommended />
      <MostRated />
    </div>
  );
}

export default App;
