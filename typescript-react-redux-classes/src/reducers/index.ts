import { combineReducers } from "redux";

import { todosReducer } from "./todos";
import {Todo} from "../actions";

export interface StoreState {
  // setting any type here to avoid type errors with redux's legacy createReducer
  todos: Todo[];
}


// @ts-ignore
export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});