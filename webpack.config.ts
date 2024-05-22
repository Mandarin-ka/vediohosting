import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import path from 'path';
import { EnvVariables, buildPaths } from './config/build/types/types';
import dotenv from 'dotenv';

export default (env: EnvVariables) => {
  dotenv.config({ path: './.env' });

  const paths: buildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    baseUrl: path.resolve(__dirname, 'src'),
  };
  const config: webpack.Configuration = buildWebpack({
    port: +process.env.PORT ?? 3000,
    mode: env.mode ?? 'development',
    paths: paths,
  });
  return config;
};
