import React from 'react';
import PropTypes from 'prop-types';

export default function TodoHeader(props) {
    return (
        
        <>
            <h1>
                {props.title}
            </h1>
            {props.children}
            {props.x + props.y}
        </>
    )
}

// 检查x , y 是不是传过来的数字， 安装 prop-types 
TodoHeader.propTypes = {
    title:PropTypes.string,
    x:PropTypes.number,  // 必须数字
    y:PropTypes.number.isRequired //(必须)
}
TodoHeader.defaultProps = {
    title: "头部未添加"
}