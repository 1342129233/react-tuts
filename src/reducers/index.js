//  在实际的项目中由于只有单一的 store 但是状态会有很多分类，所以我们需要划分 reducer,
//  但是 createStore 参数又只接受一个 reducer ,所以 redux 又提供了一个用于合并多个 reducer 的方法，不要手动合并
import { combineReducers } from 'redux'

// 引入cart reducer, 如果有多个继续引入
import cart from './cart'

// 导出合并后的 reducer 
export default combineReducers({
    // 把多个 reducer 作为 combineReducers 对象参数传入
    // 在外部就可以通过 store.getState().cart 来获取到 cartReducer 里面的 state 
    cart
})