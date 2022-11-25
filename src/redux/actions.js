export const addCharacter = (character) => {
  return { type: "ADD_CHARACTER", payload: character };
};

export const removeCharacter = (id) => {
  return { type: "REMOVE_CHARACTER", payload: id };
};

export const filterCards = (gender) => {
  return { type: "FILTER", payload: gender };
};

export const orderCards = (id) => {
  return { type: "ORDER", payload: id };
};

export const filterAndOrder = (id, gender) => {
  return { type: "FILTER-AND-ORDER", payload: { id, gender } };
};

export const getCharacter = (pageNum) => {
  return function (dispatch) {
    fetch(`https://rickandmortyapi.com/api/character?page=${pageNum}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET-CHARACTER", payload: data });
      });
  };
};
