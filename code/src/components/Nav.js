import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Home from './Home';

const Nav = ({ onLinkClick }) => {
	const [showBurger, setShowBurger] = useState(false);

	const showBurgerMenu = () => {
		setShowBurger(!showBurger);
	};

	const categories = [
		{
			category: 'Popular',
			path: 'popular',
		},
		{
			category: 'Now Playing',
			path: 'now_playing',
		},
		{
			category: 'Upcoming',
			path: 'upcoming',
		},
		{
			category: 'Top rated',
			path: 'top_rated',
		},
	];

	return (
		<header>
			<nav>
				<Home />
				<button className="nav__button" onClick={showBurgerMenu}>
					<i className="fa fa-bars"></i>
				</button>
				<div
					className={showBurger ? 'nav__button--open' : 'nav__button--closed'}
				>
					{categories.map((category, index) => {
						return (
							<div key={index}>
								<Link
									to="/"
									className="nav__link"
									onClick={() => {
										onLinkClick(`${category.path}`);
										showBurgerMenu();
									}}
								>
									{category.category}
								</Link>
							</div>
						);
					})}
				</div>
			</nav>
		</header>
	);
};
export default Nav;
