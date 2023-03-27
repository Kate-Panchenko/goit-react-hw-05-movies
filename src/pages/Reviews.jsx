import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviews } from "services/getMovies";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReviewsList } from "components/MoviesList/Reviews";
import { Title } from "components/MoviesList/MoviesList.styled";

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        async function getReviews() {
            try {
                const reviews = await fetchReviews(id);
                if (reviews.length) {
                    setReviews([...reviews]);
                    setIsLoaded(true);
                }
        } catch (error) {
            toast.error('We can`t find reviews of this film');
        }
        }
        getReviews();
    }, [id])
    
    if (isLoaded) {
        return (
            <section>
                <ReviewsList reviews={reviews} />
            </section>
        )
    } else {
        return(<Title>Sorry, there are no reviews for this movie</Title>)
    }
}

export default Reviews;
