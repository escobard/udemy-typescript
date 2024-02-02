import axios from 'axios';
import { Dispatch } from 'redux'
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepositories = (term: string) => {
  // the annotation here ensures that each dispatch statement matches one of the defined action types
  return async (dispatch: Dispatch<Action>) => {
    // dispatches the action, alerting redux that the app is searching repositories
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    })

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          // appends the query string to the url
          text: term
        }
      })

      // maps through results and only returns package names
      const names = data.objects.map((result: any) => {
        return result.package.name
      })
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      })

    } catch(err){
      if (err instanceof Error){
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message
        })
      }

    }
  }
}