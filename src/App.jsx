import PageHeader from './components/PageHeader/PageHeader';

import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<PageHeader
				title='Поиск'
				text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
				input='search'
			/>
			<MovieList />
		</div>
	);
}

export default App;
