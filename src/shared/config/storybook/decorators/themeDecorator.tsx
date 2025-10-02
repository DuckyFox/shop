import React from 'react';
import 'app/styles/index.scss';
import { useAppSelector } from '@app/hooksRTK/hooksRTK.ts';
import { themeSelector } from '@entities/Theme';
import type { Decorator } from '@storybook/react';
import { makeMockStore } from '@app/providers/StoreProviders';
import { Provider } from 'react-redux';

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const theme = useAppSelector(themeSelector);
    return <div className={`app ${theme}`}>{children}</div>;
};

export const themeDecorator: Decorator = (Story) => {
    return (
        <ThemeWrapper >
            <Story/>
        </ThemeWrapper>
    );
};