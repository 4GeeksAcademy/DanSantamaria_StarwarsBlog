export const initialStore = () => {
  return {
    characters: [],
    planets: [],
    vehicles: [],
    favorites: []
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'set_characters':
      return {
        ...store,
        characters: action.payload
      };

    case 'set_planets':
      return {
        ...store,
        planets: action.payload
      };

    case 'set_vehicles':
      return {
        ...store,
        vehicles: action.payload
      };

    case "add_favorite":
      const exists = store.favorites.some(
        (fav) => fav.uid === action.payload.uid
      );

      if (exists) return store;

      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };

    case 'remove_favorite':
      return {
        ...store,
        favorites: store.favorites.filter(
          (fav) => fav.uid !== action.payload.uid
        )
      };

    default:
      return store;
  }
}
