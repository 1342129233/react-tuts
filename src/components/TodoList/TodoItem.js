import React, { Component } from 'react';
// PureComponent 数据浅比较
class TodoItem extends Component {
    constructor(){
        super()
        this.state = {}
    }
    handleCheckboxChange = () => {
        // 判断有没有再执行
        // this.props.onCompeletedChange && this.props.onCompeletedChange(this.props.id)   
        const {
            onCompeletedChange = () => {},
            id
        }  = this.props
        onCompeletedChange(id)
    }

    // 生命周期
    shouldComponentUpdate(nextProps, nextState) { // 会重复渲染返回true 或者 false ,当两个值不相等的时候渲染
        // return nextProps.isCompleted !== this.props.isCompleted
    } 

    // UNSAFE_componentWillReceiveProps(nextProps){
    //     this.setState({
    //         completedText: nextProps.isCompleted ? '已完成' : '未完成'
    //     })
    // }
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