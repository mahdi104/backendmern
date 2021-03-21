import {
  GET_CONTACT,
  ADD_CONTACT,
  LOAD_CONTACT,
  FAIL_CONTACT,
} from "../ActionTypes/ActionType";
const initialState = {
  contactList: [{ name: "ezdine", email: "maiol", phone: 12235 }],
  errors: null,
  loading: false,
};
const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACT:
      return { ...state, loading: true };

    case FAIL_CONTACT:
      return { ...state, loading: false, errors: payload };
    case GET_CONTACT:
      return { ...state, loading: false, contactList: payload.listContact };
    default:
      return state;
  }
};
export default contactReducer;
