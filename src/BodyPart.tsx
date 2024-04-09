import React, {useEffect, useState} from 'react';
import Alert from "@mui/material/Alert";
import Poem from "./BodyCards/Poem"
import {Padding} from "@mui/icons-material";
import Card from "./BodyCards/Card"
import TechListCard from "./BodyCards/TechListCard"

const style = {
    backgroundColor: "#282c34",
    color: "darkviolet",
    boxShadow: '10px',
    fontWeight: "bold",
    fontFamily: "revert-layer",
    fontSize: "xxx-large",
    margin: "0 15vw",
}

function BodyPart() { //这就是一个组件，组件在JS中被定义为一个函数，函数的名称就是组件的名称
    return (
        <div style={style} id={"body_part"}>
            <p style={{color: "white"}}>Apricityx's Space</p>
            <TechListCard/>
            <Poem/>
            {/*<Card/>*/}
        </div>
    )
}

export default BodyPart;