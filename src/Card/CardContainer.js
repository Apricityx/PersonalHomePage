import React from 'react';
import CardIP from './CardIP';
import Alert from "@mui/material/Alert";

function CardContainer() { //这就是一个组件，组件在JS中被定义为一个函数，函数的名称就是组件的名称
    return (
        <>
            <div><p style={{color:"blue",boxShadow:'10px',fontWeight:"bold",paddingLeft:"3vh"}}>Apricityx</p></div>
            <Alert variant="filled" severity="warning">
                This website is still under construction.
            </Alert>
            <CardIP/>
            <p>WIP</p>
        </>
    )
}

export default CardContainer;