interface IMovie {
  title: string;
  year: string;
  type: string;
  poster: string;
}

interface INominate {
  name: string;
}

interface ISearch {
  searchTerm?: string;
  pagesNumber?: number;
}

type ShoppiesState = {
  search: ISearch;
  movies: IMovie[];
  nominates: INominate[];
};

type MoviesAction = {
  type: string;
  movies: IMovie[];
};

type SearchAction = {
  type: string;
  search: ISearch;
};
