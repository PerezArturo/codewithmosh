import React from "react";
import "./App.css";
import SearchMovie from "./components/searchMovie";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovie />
    </div>
  );
};

export default App;
