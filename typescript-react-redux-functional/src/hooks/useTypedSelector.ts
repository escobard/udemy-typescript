// not a fan of this approach AT ALL - mixing hooks and redux to manage simple state screams bad practice, seems like an antipattern and overly bloated code for no good reason (other than to use Redux with Hooks)
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from '../state'

// a hook to ensure redux understands the correct types of our reducers
/// this is the official workaround from redux, but even the instructor agrees this is some ugly syntax
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;