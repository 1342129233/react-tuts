import React, { Component, Fragment } from 'react';

import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from './components'

// class 这种类组件有 this 普通的（函数式组件没有）没有 this 组件

class App extends Component {
    // state = { 
    //     title: '今日事'
    // }
    
    constructor(){    // 这里面 this.state 里面必须加上 super()
        super()
        this.state = { 
            title: '今日事',
            todos: [
                {
                    id: 1,
                    title: '吃饭',
                    isCompleted: true
                },
                {
                    id: 2,
                    title: '睡觉',
                    isCompleted: false
                }
            ],
            wang:'<div>a</div>'
        }
    }
    addTodo = (totoTitle) => {
        // 这样写出问题， 因为 3 不是一个数组， 因为 push 语句返回的是数组的长度
        // this.setState({
        //     todos: this.state.todos.push({
        //         id: Math.random(),
        //         title: totoTitle,
        //         isCompleted: false
        //     })
        // })
        // concat 合并多个数组，返回新数组 (推荐)
        // this.setState({
        //     todos: this.state.todos.concat({
        //         id: Math.random(),
        //         title: totoTitle,
        //         isCompleted: false
        //     })
        // })
        // 相当于拷贝了成了一个新数组
        const newTodos = this.state.todos.slice()
        newTodos.push({
            id: Math.random(),
            title: totoTitle,
            isCompleted: false
        })
        this.setState({
            todos: newTodos
        })
    }

    render() { 
        return ( 
            <Fragment>
                <div dangerouslySetInnerHTML={{__html:this.state.wang}}></div>
                <TodoHeader title={this.state.title} x={1} y={2}>
                    待办事项
                </TodoHeader>
                <TodoInput btnText="ADD" addTodo={this.addTodo} />
                <TodoList todos={this.state.todos}/>
                <Like />
            </Fragment>
        );
    }
}
 
export default App;