export interface ResponseKiniopoisk {
  docs: Movie[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface Movie {
  id: number;
  name: string;
  year: number;
  poster: Poster;
  persons: Persons[];
}

// interface Names {
//   name: string;
//   language?: string;
//   type?: string;
// }

interface Poster {
  url: string;
  previewUrl: string;
}

interface Persons {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
}
