import React from 'react';
//定义样式
const styles = {


    container: {
        height: '10vh',
        width: '10vw',
        padding: '0',
        backgroundColor: 'black',
        zIndex: 9,
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
        <div style={styles.container}>
            <p>WIP</p>
        </div>
    )
}

export default UserInformation;