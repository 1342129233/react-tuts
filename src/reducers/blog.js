import actionTypes from '../actions/actionTypes'

const initState = {
    list: [
        {
            userId:1,
            id:1,
            title: 'one',
            body: 'one'
        },
        {
            userId:2,
            id:2,
            title: 'two',
            body: 'two'
        }
    ],
    errMsg: '',
    isLoading: false
}
export default (state = initState, action) => {
    switch(action.type){
        case actionTypes.START_FETCH_BLOG_LIST:
            return {
                ...state,
                isLoading:true
            }
        case actionTypes.FETCH_BLOG_LIST_SUCCESS:
            return {
                ...state,
                isLoading:false,
                list: action.payload.list,
                errMsg: ''
            }
        case actionTypes.FETCH_BLOG_LIST_FAILED:
            return {
                ...state,
                isLoading:false,
                errMsg: '处错了。。。'
            }
        default:
            return state
    }
}