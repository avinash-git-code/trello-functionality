import uuid from "uuidv4";

export const addCard = (listID, text) => {
  const id = uuid();
  return {
    payload: { text, listID, id }
  };
};

export const editCard = (id, listID, newText) => {
  return {
    payload: { id, listID, newText }
  };
};

export const deleteCard = (id, listID) => {
  return {
    payload: { id, listID }
  };
};
