// react 里面通过 ref 来获取组件或者 dom 元素，要使用ref 之前必须先调用 React.createRef 方法来创建一个ref

import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';


class TodoInput extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: 'xxx'
        }

        // 在 constructor 里面来创建 ref
        this.inputDom = createRef()
    }

    static propTypes = {
        btnText:PropTypes.string,
    }
    // 默认的当没有值的时候默认值
    static defaultProps = {
        btnText: "添加"
    }
    // input 框
    handleInputChange = (e) => {
        this.setState({
            inputValue:e.currentTarget.value
        })
    }
    // 点击
    handleAddClick = () => {
        this.props.addTodo(this.state.inputValue)
    }
    
    handleKeyUp = (e) => {
        if(e.keyCode === 13){
            this.handleAddClick()
        }
    }

    handleAddClick = () => {
        // 在实际的项目中还需要对 this.state.inputValue 做验证，如果验证通过再执行下面的方法
        if(this.state.inputValue === ''){
            return
        }
        this.props.addTodo(this.state.inputValue)
        this.setState({
            inputValue: ''
        },() => {
            this.inputDom.current.focus()
        })
    }
    render(){
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleKeyUp}
                    ref={this.inputDom}
                />
                <button 
                    onClick={this.handleAddClick}

                >
                    {this.props.btnText}
                </button>
            </div>
        )
    }
    
}

export default TodoInput;
