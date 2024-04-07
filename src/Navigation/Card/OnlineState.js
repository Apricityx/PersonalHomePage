import React from 'react';
import Alert from "@mui/material/Alert";
import {Card, CardActionArea, CardContent, Skeleton, Typography} from "@mui/material";
import {fetch_last_online_time} from "./IPPoster";

async function if_online() {
    let time_first = await fetch_last_online_time()
    setTimeout(async function () {
        if (time_first === -1){
            document.getElementById("ONLINE_CONTAINER").innerText = "当前无法连接服务器"
            document.getElementById("ONLINE_CONTAINER").style.color = "darkYellow"
            document.getElementById("ONLINE_STATE_Loading").style.display = "none"
            return
        }
        let time_second = await fetch_last_online_time()
        let time_diff = Math.abs(time_first - time_second)
        if (time_diff >= 1) {
            document.getElementById("ONLINE_CONTAINER").innerText = "当前在线"
            document.getElementById("ONLINE_CONTAINER").style.color = "green"
        } else {
            document.getElementById("ONLINE_CONTAINER").innerText = "当前离线"
            document.getElementById("ONLINE_CONTAINER").style.color = "grey"
        }
        document.getElementById("ONLINE_STATE_Loading").style.display = "none"
    }, 3000)
}

setInterval(if_online, 2000)

function OnlineState() {
    return (
        <Card sx={{}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color={"green"} id="ONLINE_CONTAINER">
                    </Typography>
                    <Typography variant="body2" color="text.secondary" id="ONLINE_CONTAINER">
                        <div id={"ONLINE_STATE_Loading"}>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                        </div>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default OnlineState;