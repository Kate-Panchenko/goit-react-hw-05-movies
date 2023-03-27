import { TrendingList } from "components/MoviesList/TrendingList";
import PropTypes from 'prop-types';
import { Title } from "components/SharedLayout/SharedLayout.styled";

const Home = ({movies}) => {
    return (
        <main>
            <Title>Trending today</Title>
            <TrendingList movies={movies} />
        </main>
    )
}

Home.propTypes = {
    movies: PropTypes.array.isRequired,
}

export default Home;