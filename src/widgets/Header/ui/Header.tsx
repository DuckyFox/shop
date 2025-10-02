import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@app/hooksRTK/hooksRTK';
import { themeSelector } from '@entities/Theme';
import ByteHybLightMode from '@shared/assets/icons/ByteHubDarkIcon.svg';
import ByteHybDarkMode from '@shared/assets/icons/ByteHubLightIcon.svg';
import cls from './Header.module.scss';
import { NavMenu } from '@widgets/NavMenu';
import { useTranslation } from 'react-i18next';
import { Button, Portal } from '@shared/ui';
import { ButtonTheme } from '@shared/ui/Button/Button.tsx';
import { Modal } from '@shared/ui';

const Header = () => {

    const { t, i18n } = useTranslation('header');

    const theme = useAppSelector(themeSelector);

    const [openRegisterModal, setOpenRegisterModal] = useState(false);

    const [modalDOMPlace, setModalDOMPlace] = useState<HTMLElement>(document.body);

    const findModalDOMPlace = ():HTMLElement => {
        return document.querySelector('.app') ? document.querySelector('.app') : document.body;
    };

    useEffect(() => {
        setModalDOMPlace(findModalDOMPlace());
    }, []);


    return (
        <header className={cls.header}>
            <div className={cls.logo}>
                {theme === 'light' ? <ByteHybDarkMode style={{ width: 70, height: 70 }}/> : <ByteHybLightMode style={{ width: 70, height: 70 }}/>}
                <h1>{t('translation\:ByteHub')}</h1>
            </div>
            <NavMenu className={cls.navigation}/>
            <Button onClick={()=>setOpenRegisterModal((prev) => !prev)} theme={ButtonTheme.PRIMARY} className={cls.regButton}>reg</Button>
            <Portal element={modalDOMPlace}>
                <Modal setOpenStatus={setOpenRegisterModal} openStatus={openRegisterModal}>Volga Volga Volga Volga Volga Volga Volga Volga Volga Volga Volga Volga </Modal>
            </Portal>
        </header>
    );
};

export default Header;