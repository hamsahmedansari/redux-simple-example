import action from "../constants/todo";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case action.ADD:
      return [...state, payload];
    case action.DELETE:
      return state;
    default:
      return state;
  }
};
