import { TrendingList } from "components/MoviesList/TrendingList";
import PropTypes from 'prop-types';

const Home = ({movies}) => {
    return (
        <main>
            <h1>Trending today</h1>
            <TrendingList movies={movies} />
        </main>
    )
}

Home.propTypes = {
    movies: PropTypes.array.isRequired,
}

export default Home;