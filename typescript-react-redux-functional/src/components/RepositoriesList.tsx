import React, { useState } from 'react';
// can be used to select deeply nested objects within redux stores, very useful!

import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  // syntax sugar abbreviating action creators with a hook
  /// again, this mixes redux and react hooks, which is bad practice IMO
  const { searchRepositories } = useActions()

  // return repositories reducer state, helpful to get state out of redux with functional components
  /// a workaround is needed with TS so that redux can understand the types returned by the reducer
  const { data, error, loading } = useTypedSelector((state) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // prevent initial form submission
    event.preventDefault()

    searchRepositories(term)
  }

  return <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={e => setTerm(e.target.value)}/>
      <button>Search</button>
    </form>
    {error && <h3>Error: {error}</h3>}
    {loading && <h3>Loading...</h3>}
    {!error && !loading && data.map((result: string) => {
      return <p>{result}</p>
    })}
  </div>
}

export default RepositoriesList