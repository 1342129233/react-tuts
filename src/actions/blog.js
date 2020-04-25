import actionTypes from './actionTypes'
import{ getPosts } from '../service' 

const startFetchBlogList = () => {
    return {
        type: actionTypes.START_FETCH_BLOG_LIST
    }
}

const fetchBlogListSuccess = (layload) => {
    return {
        type: actionTypes.FETCH_BLOG_LIST_SUCCESS,
        layload
    }
}

const fetchBlogListFailed = () => {
    return {
        type: actionTypes.FETCH_BLOG_LIST_FAILED
    }
}

export const fetchBlogList = () => dispatch => {
    dispatch(startFetchBlogList())
    getPosts()
    .then(resp => {
        dispatch(fetchBlogListSuccess)
        console.log(resp)
        if(resp.status === 200){
            dispatch(fetchBlogListSuccess)({
                list:resp
            })
        }else{
            dispatch(fetchBlogListFailed())
        }
        
    })
    .catch(error => {
        dispatch(fetchBlogListFailed)
        console.log(error)
    })
}