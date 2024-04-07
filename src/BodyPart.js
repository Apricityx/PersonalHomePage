import React from 'react';
import Alert from "@mui/material/Alert";

const style = {
    backgroundColor: "#282c34",
    color: "darkviolet",
    boxShadow: '10px',
    fontWeight: "bold",
    fontFamily: "revert-layer",
    fontSize: "xx-large"
}
let poem = ''

const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        console.log("SUCC")
        poem = xmlhttp.responseText
        document.getElementById("poem").innerHTML = poem
    }
}
xmlhttp.open("GET", "https://v1.hitokoto.cn/?c=f&encode=text", true);
xmlhttp.send();

function BodyPart() { //这就是一个组件，组件在JS中被定义为一个函数，函数的名称就是组件的名称
    return (
        <div style={style} id={"body_part"}>
            <div id={"poemCard"} style={{color: "white"}}><p id={"poem"}></p></div>
            <p style={{color: "red"}}>HELLO</p>
        </div>
    )
}

export default BodyPart;