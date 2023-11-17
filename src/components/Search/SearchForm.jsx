import { useState } from 'react';

import './SearchForm.css';

import Button from '../Button/Button';
import Input from '../Input/Input';

const SearchForm = () => {
	const [inputQuery, setInputQuery] = useState('');

	const onInputChangeHandler = event => {
		setInputQuery(event.target.value);
	};

	const onFormSubmitHandler = event => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};

	return (
		<form className='search' onSubmit={onFormSubmitHandler}>
			<Input
				placeholder='Введите название'
				icon={true}
				inputQuery={inputQuery}
				onChangeQuery={onInputChangeHandler}
			/>
			<Button>Искать</Button>
		</form>
	);
};

export default SearchForm;
