let url = "pve.zwtsvx.xyz"
let port = "1127"
let request_url = "https://" + url + ":" + port + '/';

export function update_online(text_container) {
    console.log("update");
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () { //回调函数
        //若请求成功
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) text_container.innerHTML = xmlhttp.responseText;
    }
    xmlhttp.open("GET", request_url + "method.php?method=get_last_connect_time", true);
    xmlhttp.send();
}

export function update_add(text_container) {
    console.log("update");
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () { //回调函数
        //若请求成功
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) text_container.innerHTML = xmlhttp.responseText;
    }
    xmlhttp.open("GET", request_url + "method.php?method=get_address", true);
    xmlhttp.send();
}

export async function fetch_ip_address() {
    try {
        const response = await fetch(request_url + "method.php?method=get_address");
        if (response.ok) {
            return await response.text();
        }
    } catch (e) {
        console.log(e);
    }
    return "无法获取";
}

export async function fetch_last_online_time() {
    try {
        const response = await fetch(request_url + "method.php?method=get_last_connect_time");
        if (response.ok) {
            return await response.text();
        }
    } catch (e) {
        console.log(e);
        return -1
    }
    return 0;
}
