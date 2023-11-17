import { useState } from 'react';

import './AddFavorite.css';

import IconBookmark from '@assets/img/icons/bookmark.svg?react';
import IconLike from '@assets/img/icons/like.svg?react';

const AddFavorite = () => {
	const [inFavorite, setInFavorite] = useState(false);

	const addFavoriteHandle = () => {
		setInFavorite(!inFavorite);
	};

	const addButtonStyle = `movies__item-favorites ${
		inFavorite ? 'added-favorite' : 'add-favorite'
	}`;

	return (
		<button className={addButtonStyle} onClick={addFavoriteHandle}>
			{!inFavorite && (
				<>
					<IconLike width={24} height={24} /> В избранное
				</>
			)}
			{inFavorite && (
				<>
					<IconBookmark width={24} height={24} /> В избранном
				</>
			)}
		</button>
	);
};

export default AddFavorite;
