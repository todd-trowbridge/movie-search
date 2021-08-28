// import type
import { SAVE_SEARCH } from "./searchType";

// export saveSearch function
export const saveSearch = (searchTerm) => {
  return {
    type: SAVE_SEARCH,
    searchTerm: searchTerm
  }
}