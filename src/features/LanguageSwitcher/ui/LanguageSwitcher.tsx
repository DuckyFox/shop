import React, {useState} from 'react';
import SwitchLanguageDarkIcon from '@shared/assets/icons/SwitchLanguageDarkIcon.svg'
import SwitchLanguageLightIcon from '@shared/assets/icons/SwitchLanguageLightIcon.svg'
import {Button} from "@shared/ui";
import {themeSelector} from "@entities/Theme";
import cls from './LanguageSwitcher.module.scss'
import {DropDown} from "@shared/ui";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "@app/hooksRTK/hooksRTK";
import {useAppSelector} from "@app/hooksRTK/hooksRTK";
import {switchLanguage} from "@entities/Language/model/languageSlice";
import {languageSelector} from "@entities/Language";

import {LanguageSwitcherState} from "@entities/Language/model/languageSlice";

const LanguageSwitcher = () => {

    const [dropDownShow, setDropDownShow] = useState(false)
    const theme = useAppSelector(themeSelector);

    const {t, i18n} = useTranslation();

    const dispatch = useAppDispatch();
    const language = useAppSelector(languageSelector);

    const switchCurrentLanguage = (newLanguage: LanguageSwitcherState["language"]) => {
        dispatch(switchLanguage(newLanguage));
        i18n.changeLanguage(newLanguage);
    }

    return (
        <div className={cls.switcher} onMouseEnter={() => setDropDownShow(true)} onMouseLeave={() => setDropDownShow(false)}>
            <Button className={cls.switcherButton}>
                {theme === 'dark' ? <SwitchLanguageDarkIcon style={{ width: 40, height: 40 }}/> : <SwitchLanguageLightIcon style={{ width: 40, height: 40 }}/>}
            </Button>
            <DropDown showStatus={dropDownShow}>
                <div>
                    <h3 onClick={()=>switchCurrentLanguage('ru')} className={cls.text}>Русский</h3>
                    <h3 onClick={()=>switchCurrentLanguage('en')} className={cls.text}>English</h3>
                    <h3 onClick={()=>switchCurrentLanguage('sr')} className={cls.text}>Српски</h3>
                </div>
            </DropDown>
        </div>

    );
};

export default LanguageSwitcher;