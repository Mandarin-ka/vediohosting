import { Configuration } from 'webpack';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';
import ESLintPlugin from 'eslint-webpack-plugin';
import Dotenv from 'dotenv-webpack';

export function buildPlugins({
  mode,
  paths,
}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  const dotenvFilename = '.env';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin(),
    new Dotenv({
      path: dotenvFilename,
      systemvars: true,
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin(), new ESLintPlugin());
  }

  if (!isDev) {
  }
  return plugins;
}
