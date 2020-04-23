import React, { Component } from 'react';

import withCopyright from './withCopyright'

@withCopyright


class Another extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                Another {this.props.name}
            </div>
        );
    }
}
 
export default Another;