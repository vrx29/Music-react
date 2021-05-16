import React, { useState } from "react";
import "./styles.css";
import musicGenres from "./data";

export default function App() {
  const [genre, setGenre] = useState("Jazz");
  function changeGenre(genre) {
    setGenre(genre);
  }

  return (
    <div>
      <h1 className="main">Want to see list of Music</h1>
      <div className="main">
        {Object.keys(musicGenres).map((genre) => (
          <button onClick={() => changeGenre(genre)} className="btn">
            {genre}
          </button>
        ))}
      </div>

      <div>
        {musicGenres[genre].map((album) => (
          <div className="card">
            <h4>{album.name}</h4>
            <p>{album.artist}</p>
            <small>{album.released}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
