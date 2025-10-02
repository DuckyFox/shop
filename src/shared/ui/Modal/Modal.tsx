import { classNames } from '@shared/lib';
import React, { useEffect } from 'react';
import { ReactNode, FC } from 'react';
import cls from './Modal.module.scss';
import { useAppSelector } from '@app/hooksRTK/hooksRTK.ts';
import { themeSelector } from '@entities/Theme';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    openStatus: boolean;
    setOpenStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal:FC<ModalProps> = (props) => {
    const { className, children, openStatus, setOpenStatus, ...otherProps } = props;

    const theme = useAppSelector(themeSelector);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onShellClick = () => {
        setOpenStatus(false);
    };

    useEffect(() => {
        const onEscapeClick = (e: KeyboardEvent) => {
            e.key === 'Escape' && setOpenStatus(false);
        };

        if (openStatus) {
            window.addEventListener('keydown', onEscapeClick);
        }

        return () => {
            window.removeEventListener('keydown', onEscapeClick);
        };
    }, [openStatus, setOpenStatus]);
    const onEscapeClick = (e: React.KeyboardEvent) => {
        e.key === 'Escape' && setOpenStatus(false);
    };
    console.log(cls[theme]);

    return (
        <div onKeyDown={onEscapeClick} onClick={onShellClick} className={classNames(cls.shell, { [cls.open]: openStatus }, [className])}>
            <div onClick={onContentClick} className={classNames(cls.content, {}, [cls[theme]])}>
                {children}
            </div>
        </div>
    );
};

export default Modal;