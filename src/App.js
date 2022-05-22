import "./App.css";
import Navigation from "./Components/Navigation";
import Recommended from "./pages/Recommended";
import {Routes, Route} from "react-router-dom"

function App() {
  return <div className="App">  
    <Navigation />
    <Recommended />
  </div>;
}

export default App;
