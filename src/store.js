// createStore 是 redux 提供创建一个用于 创建 store 的方法
import { createStore } from 'redux'

// 引入合并后的 reducer
import rootReducer from './reducers'

// createStore 的第一个参数必须是一个 reducer ,如果是多个请在 reducers 目录下先使用 combineReducers 合并之之后再导出
export default createStore(rootReducer)