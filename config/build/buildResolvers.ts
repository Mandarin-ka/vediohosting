import path from 'path';
import { BuildOptions } from './types/types';
import { Configuration } from 'webpack';

export function buildResolvers(
  options: BuildOptions
): Configuration['resolve'] {
  return {
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
  };
}
