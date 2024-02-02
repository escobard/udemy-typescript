import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer
});

export default reducers;

// required workaround to get TS working with redux useSelector - redux is such a pain in the ass
export type RootState = ReturnType<typeof reducers>;