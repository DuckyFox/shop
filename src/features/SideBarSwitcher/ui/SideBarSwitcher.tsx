import {Button} from "@shared/ui";
import SidebarSwitchLightIcon from '@shared/assets/icons/SidebarSwitchLightIcon.svg'
import SidebarSwitchDarkIcon from '@shared/assets/icons/SidebarSwitchDarkIcon.svg'
import {useAppSelector} from "@app/hooksRTK/hooksRTK";
import {themeSelector} from "@entities/Theme";
import cls from './SideBarSwitcher.module.scss'
import {Dispatch, SetStateAction, FC} from "react";
import {switchState} from "@shared/lib";

interface SideBarProps {
    className?: string;
    setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const SideBarSwitcher:FC<SideBarProps> = (props) => {

    const {
        className,
        setCollapsed,
        ...otherProps
    } = props

    const theme = useAppSelector(themeSelector);

    return (
        <Button onClick={()=>switchState(setCollapsed)} className={cls.button}>
            {theme === "dark" ? <SidebarSwitchDarkIcon style={{width: 40, height: 40}}/> : <SidebarSwitchLightIcon style={{width: 40, height: 40}}/>}
        </Button>
    );
};

export default SideBarSwitcher;