import React from 'react';
import {AppLink} from "@shared/ui";
import {classNames} from "@shared/lib";
import cls from './NavMenu.module.scss'

interface NavMenuProps {
    className?: string;
}

const NavMenu = (props:NavMenuProps) => {
    const {className, ...otherProps} = props;
    return (
        <nav className={classNames(cls.navMenu, {}, [className])}>
            <AppLink to={'/'}>Main</AppLink>
            <AppLink to={'/about'}>About</AppLink>
        </nav>
    );
};

export default NavMenu;