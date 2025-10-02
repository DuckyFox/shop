import type webpack from 'webpack';
import { BuildPath } from '../build/types/types.ts';
import path from 'node:path';
import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const svgLoader = {
    test: /\.svg$/,
    use: [{
        loader: '@svgr/webpack',
        options: {
            icon: true,
        },
    }],
};

const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
        // в случае прод сборки минимизируем классы
        'style-loader',
        {
            // выбираем лоадер
            loader: 'css-loader',
            options: {
                modules: {
                    // определяем, воспринимать ли css как модуль, булевой проверкой наличия в пути module
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    // в случае прод сборки минимизируем классы
                    localIdentName: '[path][name]__[local]',
                    namedExport: false,
                },
            },
        },
        'sass-loader',
    ],
};

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPath = {
        entry: '',
        output: '',
        template: '',
        config: '',
        public: '',
        src: path.resolve(__dirname, '..', '..' , 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules = config.module.rules.map((rule:RuleSetRule) => {
        if(/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/  };
        }

        return rule;
    });

    config.module.rules.push(scssLoader);
    config.module.rules.push(svgLoader);

    return config;
};