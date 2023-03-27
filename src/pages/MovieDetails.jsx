import { useParams, useLocation, Outlet } from "react-router-dom";
import { useEffect, useState, Suspense } from "react";
import { fetchMoviesById } from "services/getMovies";
import { OneMovie } from "components/MovieDetails/OneMovie";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledLink, Wrapper, ButtonsList } from "components/SharedLayout/SharedLayout.styled";
import { Label } from "components/Searchbar/Searchbar.styled";
import { Loader } from "components/Loader/Loader";
import { BiArrowBack } from 'react-icons/bi';

const MovieDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        async function fetchMovie() {
            try {
                const movie = await fetchMoviesById(id);
                setMovie(movie);
                setIsLoaded(true);
            } catch (error) {
                toast.error('Something went wrong, try one more time');
            }
        }
        fetchMovie();
    }, [id])

    if (isLoaded) {
        return (
            <main>
                <StyledLink to={`${location.state.from}`}>
                    <Label>
                        <BiArrowBack style={{ width: 20, height: 24 }} />
                    Go Back
                    </Label>
                </StyledLink>
                <Wrapper>
                    <OneMovie movie={movie} />
                <ButtonsList>
                    <li>
                        <StyledLink to="cast" state={{from: `${location.state.from}`}}>
                            Cast
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="reviews" state={{from: `${location.state.from}`}}>
                            Reviews
                        </StyledLink>
                    </li>
                </ButtonsList>
                <Suspense fallback={<Loader />}>
                    <Outlet/>
                </Suspense>
                </Wrapper>      
            </main>
        )
    }

}

export default MovieDetails;