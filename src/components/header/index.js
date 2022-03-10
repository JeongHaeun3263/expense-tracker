import React from 'react';
import { FaRegCreditCard } from 'react-icons/fa';
import './header.css';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__logo'>
				<FaRegCreditCard />
				<p>Expense Tracker</p>
			</div>
		</header>
	);
};

export default Header;
