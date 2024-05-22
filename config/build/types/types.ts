export interface buildPaths {
  entry: string;
  html: string;
  output: string;
  baseUrl: string;
}

export type BuildMode = 'production' | 'development';

export interface BuildOptions {
  port: number;
  paths: buildPaths;
  mode: BuildMode;
}

export interface EnvVariables {
  mode: BuildMode;
  port: number;
}
