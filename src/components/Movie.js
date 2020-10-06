import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};
export default function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "http://placeimg.com/640/480/arch/grayscale"
        }
        alt={title}
      />
      <div class="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div class="movie-hover">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}
