// 只要触发 actions 所有的 reducers 都会收到
// 为了避免 actionType 重复， 一般会把 actionType 放在一个文件夹里面进行管理，也可以避免写错 actionType 
import actionType from '../actions/actionType'

// 对于购物车来说，这里有一个初始化的状态
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

// 创建购物车的 reducer， reducer的固定写法是两个参数，第一个是 state 并有一个初始值，第二个是 action
export default (state = initState, action) => {
    // 根据不同的 actio.type, 做不同的处理，每次返回一个新的 state, 返回的类型要一样
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
        // 一定要有 default， 当 action.type 不对的时候，不做任何处理，返回 state
        default: 
            return state
    }
}