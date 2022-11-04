export default function PageReducer(
  state = { page: 1, favourites: [] },
  action
) {
  switch (action.type) {
    case "NEXT":
      return { ...state, page: state.page + 1 };
    case "PREVIOUS":
      if (state.page === 1) return state;
      return { ...state, page: state.page - 1 };
    case "ADD_TO_FAVOURITES":
      if (
        state.favourites.findIndex((fav) => fav.id === action.payload.id) !== -1
      )
        return state;
      return { ...state, favourites: [...state.favourites, action.payload] };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: state.favourites.filter((item) => {
          if (item.id !== action.payload.id) return item;
          return null;
        }),
      };
    case "SORT_BY_NAME":
      state.favourites.sort((a, b) => (a.name > b.name ? 1 : -1));
      return state;
    case "SORT_BY_RATING":
      state.favourites.sort((a, b) => (a.vote_average < b.vote_average ? 1 : -1));
      return state;
    default:
      return state;
  }
}
