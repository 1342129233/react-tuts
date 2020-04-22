import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// useState 是一个方法，这个方法的参数就是默认值，结果是一个数组第一个参数相当于 state 第二个参数是 setState
// 解构出两个值
const Counter = () => {
  const [ count, setCount ] = useState(0)
  useEffect(() => {
    document.title = `数量是${count}`
  })
  return (
    <div>
      <div>当前数量是 {count}</div>
      {/* 这里是 useState 就是setState 生成的方法（第二个值，不同地方在于，这里的参数是一个新值即可） */}
      <button onClick={() => {setCount(count + 1)}}> + </button>
          <span>{ count }</span>
      <button onClick={() => {setCount(count - 1)}}> - </button>
    </div>
  )
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
)