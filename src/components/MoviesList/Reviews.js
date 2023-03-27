import { ReviewsInfo, Review, Title, ReviewInfo } from './MoviesList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsInfo>
      {reviews.map(({ id, author, content }) => {
        return (
          <Review key={id}>
            <Title>
              Author name: <ReviewInfo>{author}</ReviewInfo>
            </Title>
            <Title>
              Review: <ReviewInfo>{content}</ReviewInfo>
            </Title>
          </Review>
        );
      })}
    </ReviewsInfo>
  );
};
