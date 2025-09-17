import webpack from "webpack";
import {buildLoaders} from "./buildLoaders.ts";
import type {BuildOptions} from "./types/types.ts";
import {buildDevServer} from "./buildDevServer.ts";
import {buildPlugins} from "./buildPlugins.ts";
import {buildResolvers} from "./buildResolvers.ts";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const {mode, port, paths, isDev} = options;

    return {
        mode: mode ?? "development",

        entry: paths.entry,

        devtool: isDev ? "inline-source-map" : undefined,

        devServer: isDev ? buildDevServer(options) : undefined,

        plugins: buildPlugins(options),

        module: {
            rules: buildLoaders(options)
        },

        resolve: buildResolvers(options),

        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
    }
}