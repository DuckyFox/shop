import React from 'react';
import {useAppSelector} from "@app/hooksRTK/hooksRTK";
import {themeSelector} from "@entities/Theme";
import ByteHybLightMode from '@shared/assets/icons/ByteHubDarkIcon.svg'
import ByteHybDarkMode from '@shared/assets/icons/ByteHubLightIcon.svg'
import cls from './Header.module.scss'
import {NavMenu} from "@widgets/NavMenu";

const Header = () => {

    const theme = useAppSelector(themeSelector);

    return (
        <header className={cls.header}>
            <div className={cls.logo}>
                {theme === "light" ? <ByteHybDarkMode style={{ width: 70, height: 70 }}/> : <ByteHybLightMode style={{ width: 70, height: 70 }}/>}
                <h1>BYTEHUB</h1>
            </div>
            <NavMenu className={cls.navigation}/>
        </header>
    );
};

export default Header;