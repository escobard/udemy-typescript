import {Action, ActionTypes, Todo} from "../actions";

// todosReducer argument sets type annotation and default value
/// sample reducer with redux and ts
export const todosReducer = (state: Todo[] = [], action: Action) => {

  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
}