import axios from "axios";
import {
  ADD_CONTACT,
  LOAD_CONTACT,
  FAIL_CONTACT,
  GET_CONTACT,
} from "../ActionTypes/ActionType";
//Get All Contacts
export const get = () => async (dispatch) => {
  dispatch({ type: LOAD_CONTACT });
  try {
    const result = await axios.get("/api/contacts");
    dispatch({ type: GET_CONTACT, payload: result.data });
    return;
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response });
  }
};
//Add Contact
export const add = (payload) => async (dispatch) => {
  dispatch({ type: LOAD_CONTACT });
  try {
    await axios.post("/api/contacts", { ...payload });
    dispatch({ type: ADD_CONTACT });
    return;
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response });
  }
};
