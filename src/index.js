import React from 'react'
import ReactDOM from 'react-dom'

// Provider 是 react-redux 提供的一个组件
import { Provider } from 'react-redux'

import App from './App.js'

// 有一个调试小技巧(仅调试)
// window.store = store

import store from './store'

ReactDOM.render(
  // 一般就直接把这个组件放在应用程序的最顶层，这个组件必须有一个 store ,这个 store 的值就必须是自己创建的 store
  // 只要在最外层包裹了这个 Provider, 那么所有的后代组件就都可以使用 Redux.connect 做连接
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
)