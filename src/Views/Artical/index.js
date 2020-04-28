import React, { Component } from 'react';

import { Link } from 'react-router-dom'
// import ArticalDetail from './ArticalDetail'

class Artical extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                {/* 显示传参 */}
                <Link to="/artical/1?from=artical">文章一</Link> 
                {/* 可以写成对象,隐式传参 */}
                <Link to={{
                    pathname: 'artical/2',
                    state: {
                        id: 3
                    }
                }}>文章二</Link>
                {/* <Route component={ArticalDetail} path="/artical/:id" /> */}
            </div>
        );
    }
}
 
export default Artical;