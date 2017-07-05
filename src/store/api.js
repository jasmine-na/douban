export function fetchMoviesByType(type, start = 0, count = 20) {
  return fetchItemByType(`/movie/${type}?start=${start}&count=${count}`)
}