import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const user = {
    name: 'Alex',
    age: 20,
    location: 'CN',
    image: 'https://img2.imgtp.com/2024/03/25/J6atPQfB.jpg'
};
user.name = 'Alex';
let _if_spining = false;

function MyButton() {
    const [count, setCount] = useState(0); //useState是一个hook，用于在函数组件中添加state状态，返回一个数组，第一个元素是状态值，第二个元素是更新状态的函数
    console.log('实例更新');

    function handleClick() {
        if (!_if_spining) {
            _if_spining = true;
            document.getElementById('me').style.animation = 'App-logo-spin 0.5s';
            setTimeout(() => {
                document.getElementById('me').style.animation = 'none';
                _if_spining = false;
            }, 500);
        }
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

function App() { //这就是一个组件，组件在JS中被定义为一个函数，函数的名称就是组件的名称
    let isOnline = true;
    const list = ['apple', 'banana', 'orange'].map((item, index) => { //将item和index传递给map函数，第一个参数是每个元素的名字，第二个参数是每个元素的索引
        return <li key={index}>{item}</li> //key是一个特殊的属性，用于帮助React识别哪些元素改变了，比如被添加或删除
    });

    return (
        <div className="App"> {/*在React中，我们用className来替代HTML中的class，此外，此处相当于向CSS传递信息“APP”*/}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div className='card'>
                    <img
                        id='me'
                        src={user.image}
                        className="My-logo"
                        alt="logo"
                    />
                    <p>My name is <spl style={{color: 'red'}}>{user.name}{isOnline ? (
                            <spl style={{color: 'green', fontSize: '100px'}}>·</spl>) :
                        (<spl style={{color: 'grey', fontSize: '100px'}}>·</spl>)}
                    </spl></p>
                </div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <MyButton/>
                {/*<ul>*/}
                {/*    {list.map((item) => (*/}
                {/*        <div>*/}
                {/*            {item}*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</ul>*/}
            </header>
        </div>
    );
}

export default App;