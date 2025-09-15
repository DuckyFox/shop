import cls from './Button.module.scss'
import {classNames} from "@shared/lib";
import {ButtonHTMLAttributes} from "react";
import {FC} from "react";

export enum ButtonTheme {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme,
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme=ButtonTheme.CLEAR,
        ...otherProps
    } = props


    return (
        <button className={classNames(cls.button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;