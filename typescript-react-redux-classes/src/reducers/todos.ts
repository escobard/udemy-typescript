import { Todo, Action, ActionTypes } from "../actions";

// todosReducer argument sets type annotation and default value
/// sample reducer with redux and ts
export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
}