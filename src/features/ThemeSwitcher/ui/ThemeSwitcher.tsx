import { useAppDispatch, useAppSelector } from '@app/hooksRTK/hooksRTK';
import { switchTheme, themeSelector } from '@/entities/Theme';
import { Button } from '@shared/ui';
import cls from './ThemeSwitcher.module.scss';
import { ButtonTheme } from '@shared/ui/Button/Button';
import SwitchThemeLightIcon from '@shared/assets/icons/SwitchThemeLightIcon.svg';
import SwitchThemeDarkIcon from '@shared/assets/icons/SwitchThemeDarkIcon.svg';

const ThemeSwitcher = () => {

    const theme = useAppSelector(themeSelector);
    const dispatch = useAppDispatch();

    return (
        <Button className={cls.switchButton} theme={ButtonTheme.CLEAR} onClick={()=>dispatch(switchTheme())}>
            {theme === 'light' ? <SwitchThemeLightIcon style={{ width: 40, height: 40 }}/> : <SwitchThemeDarkIcon style={{ width: 40, height: 40 }}/>}
        </Button>
    );
};

export default ThemeSwitcher;