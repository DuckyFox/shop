import {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import './styles/global.scss'
import {classNames} from "@shared/lib";
import {useAppSelector} from "@app/hooksRTK/hooksRTK";
import {themeSelector} from "@entities/Theme";

const App = () => {
    const theme = useAppSelector(themeSelector)
    const [count, setCount] = useState(0)
    return (
        <div className={classNames("app", {}, [`${theme}`])}>
            <Link to={'/'}>home</Link>
            <Link to={'/about'}>about</Link>
            <Outlet/>
        </div>
    );
};

export default App;