interface IMovie {
  id: string;
  title: string;
  year: string;
  type: string;
  poster: string;
  isNominated?: boolean;
}

interface INomination {
  movies: IMovie[];
  toggleNomination?: boolean;
}

interface ISearch {
  searchTerm?: string;
  pagesNumber?: number;
}

type ShoppiesState = {
  search: ISearch;
  movies: IMovie[];
  nominatedMovies: INomination;
};

type MoviesAction = {
  type: string;
  movies: IMovie[];
};

type NominateAction = {
  type: string;
  movie?: IMovie;
};

type SearchAction = {
  type: string;
  search?: ISearch;
};
