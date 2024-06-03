export interface Movie {
  id: number;
  names?: Name[];
  year: number;
  poster: Poster;
  persons: Persons[];
  name?: string;
  videos: Video;
}

interface Video {
  trailers: Trailer[];
}

interface Trailer {
  name: string;
  site: string;
  type: string;
  url: string;
}

interface Name {
  name: string;
  language?: string;
  type?: string;
}

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
