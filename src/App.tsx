import React from "react";
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Carousel infinite={false} slides={1} />
      <Carousel infinite={true} slides={4} />
      <Carousel infinite={false} slides={10} />
    </div>
  );
}

export default App;
