import React, { Component } from 'react';

import { CounterConsumer} from '../../counterStore'
// 定义一个 Counter 组件
class Counter extends Component {
    render () {
      return(
        // 使用 CounterConsumer 来接接收 count,
          <CounterConsumer>
              {
                //  注意 Consumer 的 Children 必须是一个方法，这里方法有一个参数，这个参数就是 Provider 的 value
                ({ count }) => {
                    return <span>{count}</span>
                }
              }
          </CounterConsumer>  
      )
    }
}

export default Counter