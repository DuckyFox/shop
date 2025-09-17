import { useState } from 'react';
import cls from './SideBar.module.scss';
import { ThemeSwitcher } from '@features/ThemeSwitcher';
import { SideBarSwitcher } from '@features/SideBarSwitcher';
import { LanguageSwitcher } from '@features/LanguageSwitcher';
import { classNames } from '@shared/lib';

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);
    console.log(collapsed);
    console.log([cls.collapsed]);

    return (
        <div className={classNames(cls.sideBar, { [cls.collapsed]:collapsed }, [])}>
            <SideBarSwitcher setCollapsed={setCollapsed}/>
            <div className={classNames(cls.sideBarButtons, { [cls.collapsed]:collapsed }, [])}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;