interface IMovie {
  name: string;
  description: string;
}

interface INominate {
  name: string;
}

type ShoppiesState = {
  searchTerm: string;
  movies: IMovie[];
  nominates: INominate[];
};

type MoviesAction = {
  type: string;
  movies: IMovie[];
};

type SearchAction = {
  type: string;
  searchTerm: string;
};
