import React from "react";
import MoviesRow from "./MoviesRow";
import requests from "../requests/Requests";
import Banner from "./Banner";

function HomePage() {
  return (
    <div>
      <Banner />
      <MoviesRow
        title="NETFLIX ORIGINALS"
        getUrl={requests.getOriginals}
        isLarge
      />
      <MoviesRow title="Trending now" getUrl={requests.getTrending} />
      <MoviesRow title="Top Rated" getUrl={requests.getTopRated} />
      <MoviesRow title="Action Movies" getUrl={requests.getActionMovies} />
      <MoviesRow title="Comedy Movies" getUrl={requests.getComedyMovies} />
      <MoviesRow title="Horror Movies" getUrl={requests.getHorrorMovies} />
      <MoviesRow title="Romance Movies" getUrl={requests.getRomanceMovies} />
      <MoviesRow title="Documentaries" getUrl={requests.getDocumentaries} />
    </div>
  );
}

export default HomePage;
