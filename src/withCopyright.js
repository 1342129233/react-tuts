import React, { Component } from 'react';

const withCopyright = (YourComponent) => {
    return class WithCopyright extends Component {
        constructor(props) {
            super(props);
            this.state = {  }
        }
        render() { 
            return ( 
                <>
                    {/* {...this.props}  内容向下传递 */}
                    <YourComponent {...this.props}/>  
                    <div>&copy , 2019 &emsp;</div>
                </>
            );
        }
    }
}

 
export default withCopyright;