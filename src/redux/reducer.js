const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // AÑADIR PERSONAJE A FAVORITOS
    case "ADD_CHARACTER":
      for (const char of state.allCharacters) {
        if (char.id === payload.id) {
          return state;
        }
      }
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
      };

    // REMOVER PERSONAJE DE FAVORITOS
    case "REMOVE_CHARACTER":
      const filteredFavorites = state.myFavorites.filter((character) => {
        return character.id !== payload;
      });
      state.allCharacters = state.allCharacters.filter((character) => {
        return character.id !== payload;
      });

      return { ...state, myFavorites: filteredFavorites };

    // FILTRAMOS POR GÉNERO
    case "FILTER":
      const filteredCharacters = state.allCharacters.filter((character) => {
        return character.gender === payload;
      });

      return { ...state, myFavorites: filteredCharacters };

    // ORDENAMOS POR ID
    case "ORDER":
      const orderById = [
        ...state.allCharacters.sort((a, b) => {
          if (payload === "Ascendente" && a.id < b.id) {
            return 1;
          } else if (payload === "Ascendente" && a.id > b.id) {
            return -1;
          } else if (payload === "Descendente" && a.id > b.id) {
            return 1;
          } else if (payload === "Descendente" && a.id < b.id) {
            return -1;
          } else {
            return 0;
          }
        }),
      ];

      return { ...state, myFavorites: orderById };

    default:
      return state;
  }
};

export default Reducer;
