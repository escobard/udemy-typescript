import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";

import { actionCreators } from "../state";

// not a fan of this approach AT ALL - mixing hooks and redux to manage simple state screams bad practice, seems like an antipattern and overly bloated code for no good reason (other than to use Redux with Hooks)
/// React community opinion is inconclusive, some say redux with hooks is fine, others consider it an overcomplication
//// https://stackoverflow.com/questions/59388810/is-it-bad-to-use-react-hook-and-redux-together-for-react-functional-component
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch)
}