import React, { Component } from 'react';

import { connect } from 'react-redux'

import BlogItem from './BlogItem'

// import { getPosts } from '../../service'
import { fetchBlogList } from '../../actions/blog'

class BlogList extends Component {
    componentDidMount(){
        // getPosts()
        // .then(resp => {
        //     console.log(resp)
        // })
        this.props.fetchBlogList()
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    // 这里还需要对传入的数据进行检测 prop-types
    render() { 
        const{
            list,
            isLoading
        } = this.props
        return (  
            isLoading
            ?
            <div>loading</div>
            :
            <ul>
                {/* <BlogItem /> */}
                {
                    this.props.list.map(blog => {
                        return (
                            <BlogItem key={blog.id} {...blog} />
                        )
                    })
                }
            </ul>
        );
    }
}

const mapState = state => ({
    list: state.blog.list,
    isLoading:state.blog.isLoading
})

export default connect(mapState, {fetchBlogList})(BlogList);