import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.js'

// 有一个调试小技巧(仅调试)
// window.store = store

import store from './store'

ReactDOM.render(
  <App store = { store}/>,
  document.getElementById('root')
)