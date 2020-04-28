import actionType from './actionType'

// action 有两种写法

// 第一种,写成一个对象，这是标准的 action ,但是问题是不能传递参数（不方便）必须写死
// export const increment = {
//     type: actionType.CART_ITEM_INCREMENT，
// payload: {
//     id： 123
// }
// }

// 在工作中，常用的一种方式使用 actionCreator, 它是一个方法返回一个对象，这个对象才是真正的 action
export const increment = (id) => {
    return {
        type: actionType.CART_ITEM_INCREMENT,
        payload: {
            id
        }
    }
    
}


export const decrement = (id) => {
    return {
        type: actionType.CART_AMOUT_DECREMENT,
        payload: {
            id
        }
    }
    
}