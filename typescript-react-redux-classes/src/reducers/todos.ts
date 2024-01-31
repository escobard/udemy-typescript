import { FetchTodosAction, Todo } from "../actions";
import { ActionTypes } from "../actions/types";

// todosReducer argument sets type annotation and default value
/// sample reducer with redux and ts
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  console.log(action)
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
}