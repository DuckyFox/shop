import { type Configuration } from 'webpack';
import { type Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildWebpack } from './config/build/buildWebpack.ts';
import type { BuildOptions, BuildPath } from './config/build/types/types.ts';
import type { BuildMode } from './config/build/types/types.ts';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Определяем __filename и __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface EnvVariables {
    mode: BuildMode;
    port: number;
}

export default (env:EnvVariables):Configuration => {

    const paths:BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        template: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        config: path.resolve(__dirname, 'config'),
        public: path.resolve(__dirname, 'public'),
    };

    const options:BuildOptions = {
        mode: env.mode ?? 'development',
        port: env.port ?? 3000,
        paths: paths,
        isDev: env.mode === 'development',
    };

    console.log(options.isDev);

    return buildWebpack(options);
};
