import type { StorybookConfig } from '@storybook/react-webpack5';

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
    /*   webpackFinal: async (config, { configType }) => {
        const paths: BuildPath = {
            build: '',
            html: '',
            entry: '',
            static: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
        };
        config.resolve.modules.push(paths.src);
        config.resolve.extensions.push('.ts', '.tsx');
        config.module.rules.push(buildCssLoader(true));
        return config;
    },*/
};
export default config;