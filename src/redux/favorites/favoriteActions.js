// import type from testTypes.js
import { SAVE_MOVIE, REMOVE_MOVIE } from "./favoriteTypes"


// export saveMovie function
export const saveMovie = (movie) => {
  return {
    type: SAVE_MOVIE,
    movie: movie
  }
}

// export saveMovie function
export const removeMovie = (movie) => {
  return {
    type: REMOVE_MOVIE,
    movie: movie
  }
}