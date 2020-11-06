import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faAward } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ movie, colorBackground: color }) => {
  return (
    <div
      className="card"
      style={{ borderStyle: "solid", borderWidth: 2, borderColor: color }}>
      <div className="col-4">
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + "poster"}
          className="card-image"
        />
      </div>
      <div className="col-8">
        <div className="card-content">
          <h1 className="card-title">
            {movie.title}{" "}
            {movie.vote_average >= 7 ? (
              <FontAwesomeIcon icon={faAward} color="gold" />
            ) : (
              <FontAwesomeIcon icon={faTrash} color="silver" />
            )}
          </h1>
          <p>
            <small>RELEASE DATE: {movie.release_date}</small>
          </p>
          <p>
            <small>RATING: {movie.vote_average}</small>
          </p>
          <p className="card-desc">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
