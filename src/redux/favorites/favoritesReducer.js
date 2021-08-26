import { REMOVE_MOVIE, SAVE_MOVIE } from "./favoriteTypes";

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MOVIE:
      return {
        favorites: [...state.favorites, action.movie],
      };
    case REMOVE_MOVIE:
      return {
        favorites: state.favorites.filter(
          (favorite) => favorite.imdbID !== action.movie.imdbID
        ),
      };

    default:
      return state;
  }
};

export default favoritesReducer;
