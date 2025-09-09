import {useState} from 'react';
import classes from './ui/App.module.scss'
import {Link, Outlet} from "react-router-dom";
import cat from '@shared/assets/cat.jpg'
import Alien from '@shared/assets/alien-svgrepo-com.svg'
import Button from "@shared/ui/Button";

const App = () => {
    const [count, setCount] = useState(0)
    return (
        <div data-testid='check' className="app">
            <Link to={'/'}>home</Link>
            <Link to={'/about'}>about</Link>
            <Outlet/>
        </div>
    );
};

export default App;