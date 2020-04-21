import React, { Component } from 'react';

class TodoItem extends Component {
    state = {  }
    render() { 
        return ( 
            <li>
                {this.props.title}{this.props.isCompleted ? '已完成' : '未完成'}
            </li>
        );
    }
}
 
export default TodoItem;