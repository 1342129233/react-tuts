import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class TodoList extends Component {
    static propTypes = {
        todos:PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })).isRequired,

        onCompeletedChange: PropTypes.func
    }
    render(){
        return (
            <ul>
                {
                    this.props.todos.map(todo => {
                        return(
                            // <TodoItem 
                            //     key={todo.id}
                            //     id={todo.id}
                            //     title={todo.title}
                            //     completed={todo.completed}
                            // />
                            <TodoItem 
                                onCompeletedChange={this.props.onCompeletedChange}
                                key={todo.id}
                                {...todo}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}

export default TodoList;