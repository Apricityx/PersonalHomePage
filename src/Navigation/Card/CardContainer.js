import React from 'react';
import CardIP from './CardIP';
import Alert from "@mui/material/Alert";
import JavascriptIcon from '@mui/icons-material/Javascript';
import {Tooltip} from "@mui/material";
import {fetch_ip_address, fetch_last_online_time} from "./IPPoster";

function CardContainer() { //这就是一个组件，组件在JS中被定义为一个函数，函数的名称就是组件的名称
    return (
        <>
            <div><p style={{
                color: "darkviolet",
                boxShadow: '10px',
                fontWeight: "bold",
                fontFamily: "revert-layer",
                fontSize: "xx-large"
            }}>Apricityx</p></div>
            <Alert variant="filled" severity="warning">
                This website is still under construction.
            </Alert>
            <CardIP />
        </>
    )
}

export default CardContainer;