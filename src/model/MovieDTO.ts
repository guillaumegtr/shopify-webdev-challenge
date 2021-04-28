export class MovieDTO {
  private Title: string;
  private Year: string;
  private imdbId: string;
  private Type: string;
  private Poster: string;

  public static toMovie = (movies: MovieDTO[]): IMovie[] => {
    return movies.map((m) => {
      return {
        title: m.Title,
        year: m.Year,
        type: m.Title,
        poster: m.Poster,
      };
    });
  };
}
