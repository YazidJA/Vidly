import http from "./httpService";

const apiEndpoint = "/movies";

function movieUrl(movieId) {
  return `${apiEndpoint}/${movieId}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function deleteMovie(moveiId) {
  http.delete(movieUrl(moveiId));
}

export function getMovie(moveiId) {
  return http.get(movieUrl(moveiId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }
  return http.post(apiEndpoint, movie);
}
