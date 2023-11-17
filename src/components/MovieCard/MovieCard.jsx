import './MovieCard.css';
import AddFavorite from './modules/AddFavorite';

import Poster from './modules/Poster';

const MovieCard = ({ title, poster, rating }) => {
	return (
		<section className='movies__item'>
			<Poster poster={poster} rating={rating} />
			<h2 className='movies__item-title'>{title}</h2>
			<AddFavorite />
		</section>
	);
};

export default MovieCard;
