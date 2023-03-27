import { Searchbar } from '../components/Searchbar/Searchbar';
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { SearchList } from 'components/MoviesList/SearchList';
import { fetchMoviesByKeyWord } from 'services/getMovies';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
    const [results, setResults] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    // const updateQueryString = (name) => {
    // const nextParams = name !== "" ? { name } : {};
    // setSearchParams(nextParams);
    // };

    const onSubmit = evt => {
        evt.preventDeafault();
        setSearchParams({ query: evt.target.query.value });
        evt.target.reset();
    }
    
    useEffect(() => {
        async function fetch(query) {
            try {
                const results = await fetchMoviesByKeyWord(query.trim());
                if (results.length) {
                    setResults([...results]);
                    return;
                }
                toast.error('No movies found. Try one more time');
            }
                catch (error) {
                    toast.error(error)
                }
        }
        if (query) {
            fetch(query);
        }
        }, [query])

    return (
        <main>
            <Searchbar onSubmit={onSubmit}  />
            <SearchList movies={results} />
        </main>
    )
}

export default Movies;