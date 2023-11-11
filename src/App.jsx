import Button from './components/Button/Button';
import PageHeader from './components/PageHeader/PageHeader';
import Paragraph from './components/Paragraph/Paragraph';

function App() {
	return (
		<div className='wrapper'>
			<Button>Искать</Button>
			<PageHeader>Поиск</PageHeader>
			<Paragraph>
				Введите название фильма, сериала или мультфильма для поиска и добавления
				в избранное.
			</Paragraph>
			<Paragraph bigSize={true}>
				After the devastating events of Avengers: Infinity War, the universe is
				in ruins due to the efforts of the Mad Titan, Thanos. With the help of
				remaining allies, the Avengers must assemble once more in order to undo
				Thanos actions and restore order to the universe once and for all, no
				matter what consequences may be in store.
			</Paragraph>
		</div>
	);
}

export default App;
