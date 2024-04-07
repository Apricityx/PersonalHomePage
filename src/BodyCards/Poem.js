import React, {useEffect, useState} from 'react';
function Poem() { //这就是一个组件，组件在JS中被定义为一个函数，函数的名称就是组件的名称
    const [hitokoto, setHitokoto] = useState('');
    useEffect(() => {
        // 从 API 获取数据
        fetch('http://pve.zwtsvx.xyz:1126/method.php?method=get_poem')
            .then((response) => response.text())
            .then((data) => setHitokoto(data))
            .catch((error) => console.error('获取数据时出错:', error));
    }, []);

    return (
        <div style={{
            borderRadius: "10px",
            // border: "1px solid",
            marginLeft: '2vw',
            boxShadow: '10px',
            fontWeight: "bold",
            fontFamily: "revert-layer",
            fontSize: "small",
            width:"15vw"
        }}>
            <div style={{color: "grey",fontStyle:"oblique",overflow:"hidden"}}><span>“{hitokoto}”</span></div>
        </div>
    )
}

export default Poem;