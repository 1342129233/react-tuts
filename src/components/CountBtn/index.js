import React, { Component } from 'react';

import { CounterConsumer} from '../../counterStore'

class CountBtn extends Component {
    render() {
        return (
            <CounterConsumer>
                {
                    ({ onIncrementCoount, onnDecrementCouunt }) => {
                        const handler = this.props.type === 'increment' ? onnDecrementCouunt : onIncrementCoount
                        return <button onClick={handler} >{this.props.children}</button>
                    }
                }

            </CounterConsumer>
        )
    }
}

export default CountBtn