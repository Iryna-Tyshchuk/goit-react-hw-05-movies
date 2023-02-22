import { getMovieReviews } from 'api/movie-service';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true);
        const data = await getMovieReviews(movieId);
        setReviews(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>Sorry we haven't reviews</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <span>Author: {author} </span>
                <span> {content}</span>
              </li>
            );
          })}
        </ul>
      )}
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      {loading && <Loader />}
    </div>
  );
};
export default Reviews;
