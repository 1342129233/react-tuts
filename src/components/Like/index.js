import React, { Component } from 'react';

class Like extends Component {
    constructor(){
        super()
        this.state = {
            isLink: false
        }
    }
    
    handleLikedClick = () => {
        // 第一种方法
        // this.setState({
        //     isLink: !this.state.isLink
        // })
        // 第二种方法  prevState 表示上一次的state数据  
        this.setState((prevState) => {
            return {
                isLink: !prevState.isLink
            }
            
        },()=>{
            // 由于 setState 是异步的所以向想要获取最新的 state 数据应该在这个回调里面来获取，回调里面的是界面渲染的 
        })
    }

    render() { 
        return ( 
            <div>
                <span onClick={this.handleLikedClick}>
                {
                    this.state.isLink ? '红' : '黑'
                }
                </span>
            </div>
        );
    }
}
 
export default Like;