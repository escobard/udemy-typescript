import { ActionType } from '../action-types'


// define a different interface for each kind of action we put together
/// for future improvement -
interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS
  payload: string[]
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR
  payload: string
}

// type union for action types
export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;
