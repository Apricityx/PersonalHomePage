import React from 'react';
import CardContainer from "./Card/CardContainer";
//定义样式
const styles = {
    container: {
        height: '0',
        width: '50vh',
        paddingTop: '',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(2px)',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        zIndex: 9,
        position: 'relative',
    },
    logo: {
        height: '40vmin',
        pointerEvents: 'none',
    },
    link: {
        color: 'white',
    },
};

function UserInformation() { //这就是一个组件，组件在JS中被定义为一个函数，函数的名称就是组件的名称
    return (
        <div style={styles.container} id="UserInformation">
            <CardContainer/>
        </div>
    )
}

export default UserInformation;