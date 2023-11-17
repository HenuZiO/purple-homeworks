import './Poster.css';
import Rating from './Rating';

const Poster = ({ poster, rating }) => {
	return (
		<div className='movies__item-poster'>
			<img
				className='movies__item-poster--img'
				src={poster}
				alt='Постер к фильму'
			/>
			<Rating rating={rating} />
		</div>
	);
};

export default Poster;
