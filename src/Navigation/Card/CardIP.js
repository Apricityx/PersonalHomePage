import React from 'react';
import Alert from '@mui/material/Alert';
import {fetch_ip_address, update_add, update_online} from './IPPoster';
import {Card, CardActionArea, CardContent, CardMedia, drawerClasses, Skeleton, Typography} from "@mui/material";
import OnlineState from "./OnlineState";

function CardIP() { //这就是一个组件，组件在JS中被定义为一个函数，函数的名称就是组件的名称
    console.log("CardIP");
    let last_ip_address = '';
    setInterval(async function () {
        let ip_address = await fetch_ip_address()
        // if (ip_address) document.getElementById("CardIP_ip").innerHTML = "IP: " + ip_address;
        if (last_ip_address !== ip_address) {
            last_ip_address = ip_address
            document.getElementById("IP_CONTAINER").innerHTML = ip_address;
        }
    }, 2000)
    return (<>
        <Card sx={{}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">IP
                    </Typography>
                    <Typography variant="body2" color="text.secondary" id="IP_CONTAINER">
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <OnlineState/>
    </>)
}

export default CardIP;
