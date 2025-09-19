import React from 'react';
import { AppLink } from '@shared/ui';
import { classNames } from '@shared/lib';
import cls from './NavMenu.module.scss';
import { useTranslation } from 'react-i18next';

interface NavMenuProps {
    className?: string;
}

const NavMenu = (props:NavMenuProps) => {
    const { t } = useTranslation('nav');
    const { className, ...otherProps } = props;
    return (
        <nav className={classNames(cls.navMenu, {}, [className])}>
            <AppLink to={'/'}>{t('translation\:Main')}</AppLink>
            <AppLink to={'/about'}>{t('translation\:About')}</AppLink>
        </nav>
    );
};

export default NavMenu;