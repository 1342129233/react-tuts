import React, { Component } from 'react';
import { BackHome } from '../../Components'

class ArticalDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    // goHome = () => {
    //     // this.props.history.push("/home")
    //     this.props.history.push({
    //         pathname: '/home',
    //         state: {
    //             id: this.props.match.params.id
    //         }
    //     })
    // }
    render() { 
        console.log(this.props)
        return (  
            <div>
                文章详情  {this.props.match.params.id}
                <BackHome />
            </div>
        );
    }
}
 
export default ArticalDetail;