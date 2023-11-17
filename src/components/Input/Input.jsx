import './Input.css';

import IconSearch from '@assets/img/icons/search.svg?react';

const Input = ({ placeholder, icon, inputQuery, onChangeQuery }) => {
	return (
		<div className='input-wrapper'>
			{icon == true && <IconSearch className='main-input__icon' />}

			<input
				type='text'
				name='inputQuery'
				className={`main-input ${
					icon == true ? 'main-input__icon--padding' : ''
				}`}
				placeholder={placeholder}
				value={inputQuery}
				onChange={onChangeQuery}
			/>
		</div>
	);
};

export default Input;
