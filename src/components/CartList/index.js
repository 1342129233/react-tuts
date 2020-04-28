import React, { Component } from 'react';
// connect 方法执行之后是一个高阶组件
import { connect } from 'react-redux'

// 导入 actions 
import {
    increment,
    decrement
} from '../../actions/cart'

class CartListt extends Component {
    render() { 
        return (  
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>商品名称</th>
                        <th>价格</th>
                        <th>数量</th>
                        <th>详情</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.CartListt.map(item => {
                            return(
                                <tr key = {item.id} >
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={this.props.decrement.bind(this, item.id)}> - </button>
                                        <span>{item.amount}</span>
                                        <button onClick={this.props.increment.bind(this, item.id)}> + </button>
                                    </td>
                                    <td></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
}

// 这里的 state 其实就是 store.getState() 的值
const mapState =(state) =>{
    // 这里 return 了什么，在组件里就可以
    return {
        CartListt: state.cart
    }
}

// mapDispatchToProps 
// const mapDispatchToProps = dispatch => {
//     return {
//         add: (id) => dispatch(increment(id)),
//         reducer: (id) => dispatch(decrement(id))
//     }
// }

// connect 方法有四个参数，常用的就两个，
// 第一个就是 mapDispatchToProps ,作用就是从 store 里把 state 注入到当前组件的 Props 上
// 第二个参数可以是 mapDispatchToProps， 这个的主要作用主要是把 action 生成的方法注入到当前组件的 props 上

// 直接第二个参数传递一个对象， 这里面的对象就是 actionCreators, 只要传入了 actionCreators ，在组件内就可以通过 
// this.props.actionCreator 来调用，这样的话再调用之后，那个 actionCreator 就会自动的把内部的 action， dispatch 出去
export default connect(mapState, { increment, decrement })(CartListt);