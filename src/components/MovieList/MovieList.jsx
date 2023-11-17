import { data } from '../../data/movies';

import MovieCard from '../MovieCard/MovieCard';

import './MovieList.css';

const MovieList = () => {
	return (
		<main className='movies'>
			{data.map(el => (
				<MovieCard
					key={el.id}
					title={el.title}
					poster={el.poster}
					rating={el.rating}
				/>
			))}
		</main>
	);
};

export default MovieList;
