import { Link, useLocation } from 'react-router-dom';
import { List, Item } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const SearchList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <Link
              to={`${id}`}
              state={{ from: location.pathname + location.search }}
            >
              <div>
                <img
                  src={
                    poster_path
                      ? 'https://image.tmdb.org/t/p/w500/' + poster_path
                      : 'No image'
                  }
                  alt="title"
                />
              </div>
              <p>{title}</p>
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

SearchList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};
