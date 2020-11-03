const apiKey = "d831eff4326d0c2e187a6e09bed754b7";

const requests = {
  getTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  getOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
  getTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  getActionMovies: `discover/movie?api_key=${apiKey}&with_genres=28`,
  getComedyMovies: `discover/movie?api_key=${apiKey}&with_genres=35`,
  getHorrorMovies: `discover/movie?api_key=${apiKey}&with_genres=27`,
  getRomanceMovies: `discover/movie?api_key=${apiKey}&with_genres=10749`,
  getDocumentaries: `discover/movie?api_key=${apiKey}&with_genres=99`,
};

export default requests;
