import action from "../constants/todo";

const addTodo = todo => {
  return dispatch => {
    console.log("====================================");
    console.log(todo);
    console.log("====================================");
    dispatch({
      type: action.ADD,
      payload: todo
    });
  };
};

export default {
  addTodo
};
