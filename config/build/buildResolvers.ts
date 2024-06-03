import path from 'path';
import { BuildOptions } from './types/types';
import { Configuration } from 'webpack';

export const buildResolvers = (options: BuildOptions): Configuration['resolve'] => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': [path.resolve(options.paths.baseUrl)],
    },
  };
};
