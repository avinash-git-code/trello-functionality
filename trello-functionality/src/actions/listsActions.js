import { CONSTANTS } from "../actions";
import uuid from "uuidv4";

export const addList = title => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    const id = uuid();
    dispatch({
      type: CONSTANTS.ADD_LIST,
      payload: { title, boardID, id }
    });
  };
};


export const editTitle = (listID, newTitle) => {
  return {
    payload: {
      listID,
      newTitle
    }
  };
};

export const deleteList = listID => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    return dispatch({
      payload: {
        listID,
        boardID
      }
    });
  };
};
