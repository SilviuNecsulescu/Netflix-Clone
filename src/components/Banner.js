import React, { useEffect, useState } from "react";
import "../css/Banner.css";
import axiosInstance from "../requests/axios";
import requests from "../requests/Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getData() {
      const request = await axiosInstance.get(requests.getOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    getData();
  }, []);
  //console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.poster_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h2 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h2>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">
          {truncate(movie?.overview, 200)}
        </div>
      </div>
      <div className="banner-fadeBottom"></div>
    </div>
  );
}

export default Banner;
