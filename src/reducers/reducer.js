import { combineReducers } from "redux";

const initialState = {};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;

    default:
      return state;
  }
};

const reducer = combineReducers({
  data,
});

export default reducer;
