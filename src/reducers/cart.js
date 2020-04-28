// 只要触发 actions 所有的 reducers 都会收到
import actionType from '../actions/actionType'
const initState = [
    {
        id:1,
        title: 'App1',
        price: 1111,
        amount: 10
    },
    {
        id:2,
        title: 'App2',
        price: 2222,
        amount: 10
    }
]

export default (state = initState, action) => {
    switch(action.type) {
        case actionType.CART_ITEM_INCREMENT:
            // 加
            return state.map(item => {
                if(item.id === action.payload.id){
                    item.amount += 1
                }
                return item
            })

        case actionType.CART_AMOUT_DECREMENT:
            // 减
            return state.map(item => {
                if(item.id === action.payload.id){
                    item.amount -= 1
                }
                return item
            })
        default: 
            return state
    }
}