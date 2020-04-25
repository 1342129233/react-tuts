import actionType from '../actions/blog'

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
    switch (action.type) {
        case actionType.START_FETCH_BLOG_LIST:
            return {
                ...state,
                isLoading: true
            }
        case actionType.FETCH_BLOG_LIST_SUCCESS:
        return {
            ...state,
            isLoading: false,
            errMsg: '出错',
            // list: action.payload.list
        }
    }
}