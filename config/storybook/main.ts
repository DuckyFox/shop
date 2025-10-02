import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'node:path';

const config: StorybookConfig = {
    'stories': [
        '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    'addons': [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-docs',
    ],
    'framework': {
        'name': '@storybook/react-webpack5',
        'options': {},
    },
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@shared': path.resolve(__dirname, '../../src/shared'),
                '@widgets': path.resolve(__dirname, '../../src/widgets'),
                '@entities': path.resolve(__dirname, '../../src/entities'),
                '@features': path.resolve(__dirname, '../../src/features'),
                '@pages': path.resolve(__dirname, '../../src/pages'),
                '@app': path.resolve(__dirname, '../../src/app'),
            };
        }
        return config;
    },
};
export default config;