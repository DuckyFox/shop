import React from 'react';
import { useAppSelector } from '@app/hooksRTK/hooksRTK';
import { themeSelector } from '@entities/Theme';
import ByteHybLightMode from '@shared/assets/icons/ByteHubDarkIcon.svg';
import ByteHybDarkMode from '@shared/assets/icons/ByteHubLightIcon.svg';
import cls from './Header.module.scss';
import { NavMenu } from '@widgets/NavMenu';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui';

const Header = () => {

    const { t, i18n } = useTranslation('header');

    const theme = useAppSelector(themeSelector);

    return (
        <header className={cls.header}>
            <div className={cls.logo}>
                {theme === 'light' ? <ByteHybDarkMode style={{ width: 70, height: 70 }}/> : <ByteHybLightMode style={{ width: 70, height: 70 }}/>}
                <h1>{t('translation\:ByteHub')}</h1>
            </div>
            <NavMenu className={cls.navigation}/>
        </header>
    );
};

export default Header;