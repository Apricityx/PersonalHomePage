import Button from '@mui/material/Button';
import logo from './logo.svg';
import './Navigation.css';
import {Alert, getFabUtilityClass, ListItemButton, Tooltip} from "@mui/material";
import UserInformation from "./UserInformation";

let is_top = false;
window.addEventListener('scroll', function () {
    move_to_top()
})
window.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        move_to_top()
    }
})

function move_to_top() {
    if (is_top) {
        return;
    }
    is_top = true;
    console.log('move_to_top');
    let enter_button = document.getElementById('enter_button');
    let container = document.getElementById('Navigation_Main');
    let React_logo = document.getElementById('React-logo');
    let My_logo = document.getElementById('My-logo-container');
    let detailed_information = document.getElementById('UserInformation');
    let body = document.getElementsByTagName('body')[0];
    let body_part = document.getElementById('body_part');
    container.style.minHeight = '1vh';

    //异步执行
    async function move() {
        setTimeout(() => {
            My_logo.addEventListener("mouseover", function () {
                body.style.backgroundColor = 'black';
                body_part.style.backgroundColor = 'black';
                container.style.backgroundColor = 'white';
                My_logo.style.animation = 'none';
                My_logo.style.height = '8vh';
                My_logo.style.width = '8vh';
                // My_logo.style.marginLeft = '7vw';
                // My_logo.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                detailed_information.style.height = "50vh"; //此处高度应与组件高度对齐
                detailed_information.style.opacity = "1";
                React_logo.style.filter = 'invert(0.8)';
                // detailed_information.style.padding = '5vh';
            });
            My_logo.addEventListener("mouseleave", function () {
                body.style.backgroundColor = '#282c34';
                body_part.style.backgroundColor = '#282c34';
                container.style.backgroundColor = '#282c34';
                My_logo.style.height = '5vh';
                My_logo.style.width = '5vh';
                detailed_information.style.height = "0"
                detailed_information.style.opacity = "0";
                React_logo.style.filter = '';
                // detailed_information.style.padding = '0';
            })
            container.style.transition = 'none';
            container.style.backgroundColor = 'rgba(40,44,52,0.5)';
            container.style.transition = '1s';

            //下面是移动完成后需要实现的语句
            My_logo.style.animation = 'none';
        }, 1000)
    }

    document.getElementsByTagName('body')[0].style.transition = '1s';
    My_logo.style.height = '5vh';
    My_logo.style.width = '5vh';
    My_logo.style.marginRight = '92vw';
    // My_logo.style.animation = 'logo_move 1s';
    move().then(r => {
        console.log('moving event done');
    })
    enter_button.innerText = '';
    enter_button.style.height = '0';
    enter_button.style.width = '0';
    React_logo.style.height = '5vh';
}

function Navigation() { //这就是一个组件，组件在JS中被定义为一个函数，函数的名称就是组件的名称
    return (

        <div id="Navigation_Main"> {/*在React中，我们用className来替代HTML中的class，此外，此处相当于向CSS传递信息“APP”*/}
            <div id={"My-logo-container"}>
                <img id={'My-logo'}
                     src={'https://img2.imgtp.com/2024/03/25/J6atPQfB.jpg'}
                     alt="logo"
                />
                <UserInformation/>
            </div>
            <img style={{transition: '1s', height: '40vh', animation: 'App-logo-spin 2s infinite'}}
                 id='React-logo'
                 src={logo}
                 alt="logo"
            />
            <Button id={'enter_button'} variant="contained"
                    style={{backgroundColor: 'aqua', color: 'black', width: '10vw'}}
                    onClick={() => {
                        move_to_top()
                    }}>GO</Button>
        </div>
    )
        ;
}

export default Navigation;