import React from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
    todos: Todo[]
    fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
    componentDidMount() {
        console.log(this.props.fetchTodos())
        this.props.fetchTodos()
    }

    render() {
        return (
            <div>
                <h1>Hi there!</h1>
            </div>
        )
    }
}

const mapStateToProps = ({ todos }: StoreState) : { todos: Todo[] } => {
    return { todos }
}

export const App = connect(mapStateToProps, { fetchTodos })(_App);