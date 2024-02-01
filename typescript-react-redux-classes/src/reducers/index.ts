import { combineReducers } from "redux";

import { todosReducer } from "./todos";
import { Todo } from "../actions";

export interface StoreState {
  // setting any type here to avoid type errors with redux & thunk libraries
  /// Using Todo[] as type throws error - Type '(state: Todo[] | undefined, action: FetchTodosAction) => Todo[]' is not assignable to type 'Todo[]'.
  todos: any
}


// @ts-ignore
export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});