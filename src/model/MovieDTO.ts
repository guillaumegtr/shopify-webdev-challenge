export class MovieDTO {
  private Title: string;
  private Year: string;
  private imdbID: string;
  private Type: string;
  private Poster: string;

  public static toMovie = (movies: MovieDTO[]): IMovie[] => {
    const nominations: IMovie[] =
      JSON.parse(localStorage.getItem('nominations')) || [];

    return movies.map((m) => {
      return {
        id: m.imdbID,
        title: m.Title,
        year: m.Year,
        type: m.Type,
        poster: m.Poster,
        isNominated: nominations.some((v) => v.id === m.imdbID),
      };
    });
  };
}
