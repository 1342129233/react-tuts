import React, { Component } from 'react';
// Redirect 默认直接进入 home 首页 ,Switch 防止多匹配，判断路由
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import {
    Home,
    Artical,
    Users,
    ArticalDetail,
    NotFound
} from './Views'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            isLogin: false
        }
    }
    render() { 
        return (  
            <div>
                <ul>
                    <li><Link to="/Home" >首页</Link></li>
                    <li><Link to="/Artical" >文章</Link></li>
                    <li><Link to="/Users" >用户</Link></li>
                </ul>
                {/* 默认是非完全匹配， exact 表示完全匹配，有包含关系，最好在里面写用方法一 */}
                {/* <Switch>
                    <Route component={Home} path="/Home" />
                    <Route component={Artical} path="/Artical" exact />
                    <Route component={ArticalDetail} path="/Artical/:id" />
                    <Route component={Users} path="/Users" />
                    <Route component={NotFound} path="/404" />
                    <Redirect to="/Home" from="/" exact />
                    <Redirect to="/404" />
                </Switch> */}
                
                {/* 渲染方法二 ， render 出来的是什么就是什么，component优先，component 不能传递额外参数 render可以 */}
                {/* render 必须是一个方法 */}
                <Switch>
                    <Route path="/Home" render={ (routerProps)=> {
                        // return <Home x={1} {...routerProps} />
                        // 判断是不是登录
                        return this.state.isLogin ? <Users {...routerProps} /> : <div>请登录</div>
                    }} />
                    <Route component={Artical} path="/Artical" exact />
                    <Route component={ArticalDetail} path="/Artical/:id" />
                    <Route component={Users} path="/Users" />
                    <Route component={NotFound} path="/404" />
                    <Redirect to="/Home" from="/" exact />
                    <Redirect to="/404" />
                </Switch>
            </div>
        );
    }
}
 
export default App;