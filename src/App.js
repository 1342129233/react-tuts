import React, { Component } from 'react';
import { BlogList } from './components'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div><BlogList /></div>
        );
    }
}
 
export default App;