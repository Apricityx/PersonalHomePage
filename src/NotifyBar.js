import Button from '@mui/material/Button';
import logo from './Navigation/logo.svg';
import './NotifyBar.css';
import ReactDOM from 'react-dom/client';
import {Alert} from "@mui/material";

function NotifyBar() {
    const add_alert = () => {
        let container = document.getElementById('NotifyBar_Main');
        console.log('尝试添加警告');

        let alert = <Alert
            severity="warning"
            action={
                <Button color="inherit" size="small">
                    I Know
                </Button>
            }
        >
            This website is under construction!
        </Alert>;

        ReactDOM.render(alert, container);
    }

    return (
        <div id="NotifyBar_Main">
            <Button id={'test_button'} variant="contained"
                    style={{backgroundColor: 'aqua', color: 'black', width: '10vw'}}
                    onClick={add_alert}>
                Test
            </Button>

            <Alert
                severity="warning"
                action={
                    <Button color="inherit" size="small">
                        I Know
                    </Button>
                }
            >
                This website is under construction!
            </Alert>

        </div>
    );
}

export default NotifyBar;
