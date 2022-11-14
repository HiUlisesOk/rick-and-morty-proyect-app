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
