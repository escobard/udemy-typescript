import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  // redux only cares about having a unique value
  /// ts automatically assigns a unique number to each value in an enum, so the shorthand below could be used
  // fetchTodos
  //// current version of redux.Dispatch type requires value to be a string type
  fetchTodos = 'FETCH_TODOS',
  deleteTodo = 'DELETE_TODOS'
}

// creates type union for possible action types
export type Action = FetchTodosAction | DeleteTodoAction;