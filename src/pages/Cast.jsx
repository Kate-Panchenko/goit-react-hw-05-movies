import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCast } from "services/getMovies";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CastList } from "components/MoviesList/Cast";
import { Title } from "components/MoviesList/MoviesList.styled";

const Cast = () => {
    const { id } = useParams();
    const [cast, setCast] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        async function getCast() {
            try {
                const cast = await fetchCast(id);
                if (cast.length) {
                    setCast([...cast]);
                    setIsLoaded(true);
                }
        } catch (error) {
            toast.error('We can`t find cast of this film');
        }
        }
        getCast();
    }, [id])
    
    if (isLoaded) {
        return (
            <section>
                <CastList cast={cast} />
            </section>
        )
    } else {
        return(<Title>Sorry, there is no cast for this movie</Title>)
    }
}

export default Cast;

