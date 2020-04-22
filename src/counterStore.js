import React, { Component, createContext } from 'react';
// createContext 这个方法的结果是一个对象，里面有两个组件 Provider 和 Consumer
// Provider 用于提供状态
// Consumer 用于接受状态
const {
    Provider,
    Consumer: CounterConsumer  // 结构出来重新赋值给一个 CounterConsumer 的组件
} = createContext()

// 这个时候 CounterProvider 可以通过 Consumer 来共享
// 封装一个 Provider， 因为直接使用 Provider, 不方便管理状态
class CounterProvider extends Component {
    constructor() {
        super()
        // 这里的状态是共享的， 任何 CounterProvider 的子孙组件后代都可以通过 CounterConsumer 来接受值
        this.state = {
            count: 100
        }
    }
    // 这里的方法也可以通过 Provider 共享下去
    incrementCoount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrementCouunt = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            // 使用 Provider 组件，他必须有一个 value 值，这个 value 里面可以传递任何数据，一般还是传递一个对象合理
            <Provider
                value={{
                    count: this.state.count,
                    onIncrementCoount: this.incrementCoount,
                    onnDecrementCouunt: this.decrementCouunt
                }}
            >
                {this.props.children}
            </Provider>
        )
    }
}

export {
    CounterConsumer,
    CounterProvider
}