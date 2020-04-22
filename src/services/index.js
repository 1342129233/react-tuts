import axios from 'axios'

import apis from './apis'

const ajax = axios.create({
    baseURL: apis.baseURL
})

// z这里还会做一些全局的连接器处理
export const getTodos = () => {
    return ajax.get(apis.todos)
}