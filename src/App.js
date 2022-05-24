import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./views/Home";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home/>
    </div>
  );
}

export default App;
