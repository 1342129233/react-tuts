import React, { Component } from 'react';

// import withCopyright from './withCopyright'
import Another from './Another'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                App
                <Another name="组件" />
            </div>
        );
    }
}
 
export default App;