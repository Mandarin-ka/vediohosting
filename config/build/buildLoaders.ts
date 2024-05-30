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

  const cssLoader = {
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
  };

  const svgrLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  // const tsLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // };

  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
      },
    },
  };

  return [assetLoader, svgrLoader, cssLoader, babelLoader];
}
