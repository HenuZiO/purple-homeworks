import './Header.css';

import IconBookmark from '@assets/img/icons/bookmark.svg?react';
import IconLogin from '@assets/img/icons/login.svg?react';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__left'>
				<IconBookmark
					className='header__left--icon'
					alt='Добавить в закладки'
				/>
			</div>
			<div className='header__right'>
				<ul className='header__menu'>
					<li className='header__menu-item'>
						<a className='header__menu-link' href='#'>
							Поиск фильмов
						</a>
					</li>
					<li className='header__menu-item'>
						<a className='header__menu-link' href='#'>
							Мои фильмы
						</a>
						<span className='header__menu-count'>2</span>
					</li>
					<li className='header__menu-item'>
						<a className='header__menu-link' href='#'>
							Войти
						</a>
						<IconLogin className='header__menu-item--icon' />
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
