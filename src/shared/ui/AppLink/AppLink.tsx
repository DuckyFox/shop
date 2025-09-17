import { NavLink, NavLinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { classNames } from '@shared/lib';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends NavLinkProps {
    theme?: AppLinkTheme;
    className?: string;
}

const AppLink = (props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme,
        ...otherProps
    } = props;
    return (
        <NavLink to={to} className={classNames(cls.applink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </NavLink>
    );
};

export default AppLink;