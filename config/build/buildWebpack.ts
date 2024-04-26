import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/types';
import path from 'path';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = mode === 'development';

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[bundle].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(options),
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': [path.resolve(options.paths.baseUrl)],
        '@components': [path.resolve(options.paths.baseUrl, 'components')],
        '@pages': [path.resolve(options.paths.baseUrl, 'pages')],
        '@utils': [path.resolve(options.paths.baseUrl, 'utils')],
        '@types': [path.resolve(options.paths.baseUrl, 'types')],
        '@API': [path.resolve(options.paths.baseUrl, 'API')],
        '@ui': [path.resolve(options.paths.baseUrl, 'ui')],
        '@store': [path.resolve(options.paths.baseUrl, 'store')],
        '@config': [path.resolve(options.paths.baseUrl, 'config')],
      },
    },

    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
