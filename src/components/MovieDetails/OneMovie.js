import { Wrapper, Poster, Info, Genres } from './OneMovie.styled';
export const OneMovie = ({ movie }) => {
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movie;

  return (
    <Wrapper>
      <Poster
        src={'https://image.tmdb.org/t/p/w500' + poster_path}
        alt={title}
      />
      <Info>
        <h2>
          {title} ({release_date && release_date.slice(0, 4)})
        </h2>
        <p>User Score: {(vote_average * 10).toFixed()}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <Genres>
          {genres.length > 3
            ? genres
                .slice(0, 3)
                .map(genre => <li key={genre.id}>{genre.name}</li>)
            : genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </Genres>
      </Info>
    </Wrapper>
  );
};
