import webpack from 'webpack';
import type { BuildOptions } from './types/types.ts';
import path from 'node:path';

export function buildResolvers(options:BuildOptions):webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(options.paths.src),
            '@app': path.resolve(options.paths.src, 'app'),
            '@shared': path.resolve(options.paths.src, 'shared'),
            '@entities': path.resolve(options.paths.src, 'entities'),
            '@features': path.resolve(options.paths.src, 'features'),
            '@pages': path.resolve(options.paths.src, 'pages'),
            '@widgets': path.resolve(options.paths.src, 'widgets'),
        },
    };
}