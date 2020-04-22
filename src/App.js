import React, { Component } from 'react';

import {
    CountBtn,
    Counter
} from './components'

class App extends Component {
    render() {
        return (
            <>
                <CountBtn type="increment"> - </CountBtn>
                <Counter />
                <CountBtn type="decrement"> + </CountBtn>
            </>
        )
    }
}

export default App