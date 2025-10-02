import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { classNames } from '@shared/lib';
import { useAppSelector } from '@app/hooksRTK/hooksRTK';
import { themeSelector } from '@entities/Theme';
import { Header } from '@widgets/Header';
import { Sidebar } from '@widgets/SideBar';

const App = () => {
    const theme = useAppSelector(themeSelector);
    const [count, setCount] = useState(0);
    return (
        <div className={classNames('app', {}, [`${theme}`])}>
            <Header/>
            <div className="main">
                <Sidebar/>
                <Outlet/>
            </div>

        </div>
    );
};

export default App;