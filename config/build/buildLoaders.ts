import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const cssLoadersWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: true,
        localIdentName: isDev
          ? '[path][name]__[local]_[hash:base64:8]'
          : '[hash:base64:8]',
      },
    },
  };

  return [
    {
      test: /\.s[ac]ss$/i,
      use: [
        { loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
        cssLoadersWithModules,
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: './src/styles/vars.scss',
          },
        },
      ],
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ];
}
