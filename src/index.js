import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// 如果想要全局扩展React.Component 的 prototype ，比如 ajax 的方法全局挂在早组件的 this 上面
// 引入所有的axios 请求
// import * as service from './services'
// 挂载到 protoType 上的http 就可以在 this.http.方法名 来操作
// React.Component.protoType.http = service

// 在页面的使用方法
// import { getRodos } from './services'
// 生命周期
    // componentDidMount(){
    //     getTodos()
    //     .then(resp => {
    //         console.log(resp)
    //         if(resp.status === 200) {
    //             this.setState({
    //                 todos: resp.data
    //             })
    //         }
    //     })
    // }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)