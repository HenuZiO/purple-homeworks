import IconStar from '@assets/img/icons/star.svg?react';

import './Rating.css';

const Rating = ({ rating }) => {
	return (
		<div className='movies__item-poster--rating'>
			<IconStar />
			{rating}
		</div>
	);
};

export default Rating;
