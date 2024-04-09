import React from 'react';
const style = {
    backgroundColor: "blue",
    width: "20vw",
    height: "fit-content",
    color: "darkviolet",
    boxShadow: '10px',
    fontWeight: "bold",
    fontFamily: "revert-layer",
    fontSize: "xxx-large",
    margin: "0 15vw",
}
function Card() { //这就是一个组件，组件在JS中被定义为一个函数，函数的名称就是组件的名称
    return (
        <>
            <div style={style}>Hello</div>
        </>
    )
}

export default Card;
