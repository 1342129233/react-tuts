import React, { Component } from 'react';

class TodoItem extends Component {
    state = {  }
    handleCheckboxChange = () => {
        // 判断有没有再执行
        // this.props.onCompeletedChange && this.props.onCompeletedChange(this.props.id)   
        const {
            onCompeletedChange = () => {},
            id
        }  = this.props
        onCompeletedChange(id)
    }
    render() { 
        return ( 
            <li>
                <input 
                    type="checkbox" 
                    checked={this.props.isCompleted}
                    onChange={this.handleCheckboxChange}
                />
                <span>{this.props.title}{this.props.isCompleted ? '已完成' : '未完成'}</span>
            </li>
        );
    }
}
 
export default TodoItem;