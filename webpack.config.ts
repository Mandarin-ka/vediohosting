import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import path from 'path';
import { BuildMode, buildPaths } from './config/build/types/types';

interface EnvVariables {
  mode: BuildMode;
  port: number;
}

export default (env: EnvVariables) => {
  const paths: buildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    baseUrl: path.resolve(__dirname, 'src'),
  };
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths: paths,
  });
  return config;
};
