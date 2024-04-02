import Button from '@mui/material/Button';
import logo from './logo.svg';
import './Navigation.css';
import {Alert, getFabUtilityClass, ListItemButton} from "@mui/material";
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
    let detailed_information = document.getElementById('detailed_information');
    container.style.minHeight = '1vh';

    //异步执行
    async function move() {
        setTimeout(() => {
            My_logo.addEventListener("mouseover", function () {
                My_logo.style.animation = 'none';
                My_logo.style.height = '8vh';
                My_logo.style.width = '8vh';
                My_logo.style.marginRight = '92vw';
            });
            My_logo.addEventListener("mouseout", function () {
                My_logo.style.height = '5vh';
                My_logo.style.width = '5vh';
                My_logo.style.marginRight = '92vw';
            })
            // My_logo.style.animation = 'none';
        }, 1000)
    }

    My_logo.style.height = '5vh';
    My_logo.style.width = '5vh';
    My_logo.style.marginRight = '92vw';
    // My_logo.style.animation = 'logo_move 1s';
    move();
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
                     style={{zIndex:999,float:'right'}}
                     src={'https://img2.imgtp.com/2024/03/25/J6atPQfB.jpg'}
                     alt="logo"
                />
                <div id="detailed_information">
                    <UserInformation/>
                </div>
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