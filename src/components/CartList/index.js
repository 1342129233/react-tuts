import React, { Component } from 'react';

import {
    increment,
    decrement
} from '../../actions/cart'

class CartListt extends Component {
    constructor() {
        super();
        this.state = {  
            CartListt: []
        }
    }
    // 接受 redux 里面的数据
    getState = () => {
        this.setState({ 
            CartListt: this.props.store.getState().cart
        })
    }
    componentDidMount(){
        this.getState()
        // subscribe()是用来观察（得到）请求的结果,可以在方法体里面写一些判断 //监听
        this.props.store.subscribe(this.getState)
    }
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
                        this.state.CartListt.map(item => {
                            return(
                                <tr key = {item.id} >
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={
                                            () => {
                                                this.props.store.dispatch(decrement(item.id))
                                            }
                                        }> - </button>
                                        <span>{item.amount}</span>
                                        <button onClick={
                                            () => {
                                                this.props.store.dispatch(increment(item.id))
                                            }
                                        }> + </button>
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
 
export default CartListt;