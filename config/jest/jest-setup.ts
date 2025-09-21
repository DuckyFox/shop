import '@testing-library/jest-dom';

import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder as any;
global.TextDecoder = TextDecoder as any;

jest.mock('react-i18next', () => ({
    ...jest.requireActual('react-i18next'),
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: { changeLanguage: () => new Promise(() => {}) },
    }),
    initReactI18next: {
        type: '3rdParty',
        init: () => {},
    },
}));