import {useAppDispatch, useAppSelector} from "@app/hooksRTK/hooksRTK";
import {switchTheme, themeSelector} from "@/entities/Theme";


const ThemeSwitcher = () => {
    const theme = useAppSelector(themeSelector)
    const dispatch = useAppDispatch();

    return (
        <button onClick={()=>dispatch(switchTheme())}>
           aaaa
        </button>
    );
};

export default ThemeSwitcher;