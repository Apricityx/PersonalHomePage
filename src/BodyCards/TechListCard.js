import React from 'react';
import "./TechListCard.css"
const style = {}
// console.log(AllImage)
function loadTechIcons() {
    document.getElementById('placeHolder').style.display = 'none'
    const icon = ['C.svg', 'CPP.svg', 'CSS.svg', 'Docker.svg', 'Git.svg', 'Github-Dark.svg', 'HTML.svg',
        'JavaScript.svg', 'Linux-Dark.svg', 'Nginx.svg', 'NodeJS-Dark.svg', 'Npm-Dark.svg', 'Photoshop.svg', 'PHP-Dark.svg',
        'Powershell-Dark.svg', 'Python-Dark.svg', 'React-Dark.svg', 'TypeScript.svg', 'Ubuntu-Dark.svg', 'VIM-Dark.svg',
        'VueJS-Dark.svg']
    for (let i = 0; i < icon.length; i++) {
        const img = document.createElement('img')
        img.src = `TechIcon/${icon[i]}`
        img.className = 'tech_icon'
        document.getElementById('tech_icon_container').appendChild(img)
    }
    let AllIcon = document.getElementsByClassName('tech_icon')
    for (let i = 0; i < AllIcon.length; i++) {
        setTimeout(() => {
            AllIcon[i].style.width = '50px'
            AllIcon[i].style.height = '50px'
        }, i * 100)
    }
}

function TechListCard() { //这就是一个组件，组件在JS中被定义为一个函数，函数的名称就是组件的名称
    return (
        <>
            {/*<button onClick={loadTechIcons}>Load Tech Icons</button>*/}
            <div style={style} id={"tech_icon_container"}>
                <img alt="Loading" src="TechIcon/C.svg" id={"placeHolder"} style={{opacity:0,width:"50px"}}/>
            </div>
        </>
    )
}

export default TechListCard;
export {loadTechIcons};