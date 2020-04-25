
import React, { Component } from 'react';

class BlogItem extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <li>
                {this.props.title}
                <p>{this.props.body}</p>
            </li>
        );
    }
}

export default BlogItem;