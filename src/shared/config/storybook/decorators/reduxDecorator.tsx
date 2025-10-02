import { Provider } from 'react-redux';
import { store } from '@app/store/store.ts';
import { Decorator } from '@storybook/react';
import { makeMockStore } from '@app/providers/StoreProviders';
import type { RootState } from '@app/store/store';
import React from "react";

export const reduxDecorator = (preloadedState?: unknown) => {
    const store = makeMockStore(preloadedState);
    const decorator: Decorator = (Story) => (

        <Provider store={store}>
            <Story/>
        </Provider>
    );
    return decorator;
};

