import axios from 'axios';
import { Dispatch, UnknownAction } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// creates a generic type for dispatch
/// interface has to extend unknown action type interface to work with current version of redux
//// https://www.udemy.com/course/typescript-the-complete-developers-guide/learn/lecture/15067246#questions/21039900
export interface FetchTodosAction extends UnknownAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo,
  payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

// sample redux thunk action with ts
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    console.log('triggered')
    // example of how to define returned type annotations for axios.get
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    })

  }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  }
}