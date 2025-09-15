import {FC, ReactNode} from "react";
import {classNames} from "@shared/lib";
import cls from './DropDown.module.scss'

interface DropDownProps {
    className?: string;
    showStatus: boolean;
    children?: ReactNode;
}

const DropDown:FC<DropDownProps> = (props) => {
    const {
        className,
        showStatus,
        children,
        ...otherProps
    } = props

    return (
        <div className={classNames(cls.dropDown, {[cls.isShow]: showStatus}, [className])}>
            {children}
        </div>
    );
};

export default DropDown;