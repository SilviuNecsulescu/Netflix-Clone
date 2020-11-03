import React, { useState, useEffect } from "react";
import axiosInstance from "../requests/axios";
import "../css/MovieRow.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

function MoviesRow({ title, getUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrainerUrl] = useState("");

  useEffect(() => {
    async function getData() {
      const request = await axiosInstance.get(getUrl);
      setMovies(request.data.results);
      //console.log(request);
    }
    getData();
  }, [getUrl]);

  const options = {
    height: "450",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrainerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrainerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="movieRow">
      <h2 className="movieRow__title">{title}</h2>
      <div className="movieRow__imageContainer">
        {movies &&
          movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              className={`movieRow__image ${
                isLarge && "movieRow_image__large"
              }`}
              src={`${imageBaseUrl}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            ></img>
          ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={options}></Youtube>}
    </div>
  );
}

export default MoviesRow;
