import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navigation from './Navigation/Navigation';
import CardContainer from "./Card/CardContainer";
import NotifyBar from "./NotifyBar";
import TicTac from "./Test/TicTac";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {colors} from "@mui/material";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<App/>*/}
        <Navigation/>
        {/*<NotifyBar/>*/}
        {/*<DevSupport ComponentPreviews={ComponentPreviews}*/}
        {/*            useInitialHook={useInitial}*/}
        {/*>*/}
        {/*    <TicTac/>*/}
        {/*</DevSupport>*/}
        {/*<hr style={{marginTop: "8vh"}}/>*/}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
