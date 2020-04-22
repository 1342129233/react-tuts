// createContext 是 react 提供的一个用于跨组件传值的方法
import React from 'react';
import ReactDOM from 'react-dom';

import { CounterProvider } from './counterStore'
import App from './App'

ReactDOM.render(
  <CounterProvider>
      <App />
  </CounterProvider>,
  document.getElementById('root')
)