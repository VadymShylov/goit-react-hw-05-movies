import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/apiService';
import s from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(res => setReviews(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p className={s.notification}>
          We don't have any reviews for this movie.
        </p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li className={s.item} key={review.id}>
              <h3 className={s.title}>Author: {review.author}</h3>
              <p className={s.discription}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
