import { removeDataTestIdBabelPlugin } from './removeDataTestIdBabelPlugin.ts';
import type { BuildOptions } from '../types/types.ts';
import type { PluginItem } from '@babel/core';


const buildBabelLoader = (options: BuildOptions) => {
    const plugins: (string | PluginItem | [PluginItem, object])[] = ['i18next-extract'];

    if (options.mode === 'production') plugins.push([removeDataTestIdBabelPlugin, { props: ['data-testid'] }]);

    return {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                plugins: plugins,
            },
        },
    };
};

export default buildBabelLoader;