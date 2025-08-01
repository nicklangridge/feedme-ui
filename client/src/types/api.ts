export type Genre = {
  name: string;
  parent: string | null;
  slug: string;
}

export type Review = {
  name: string;
  slug: string;
  snippet: string;
  url: string;
}

export type Release = {
  album_id: string;
  album_name: string;
  album_slug: string;
  album_uri: string;
  artist_id: number;
  artist_name: string;
  artist_slug: string;
  artist_uri: string;
  created?: string;
  image: string;
  genres: Genre[];
  reviews: Review[];
}

export type Releases = {
  albums: Release[];
}

export type Meta = {
  page: number;
  total: number;
  totalPages: number;
};

export type TopGenre = {
  name: string;
  slug: string;
  count: number;
}

export type TopGenres = TopGenre[];