import React, { useState } from 'react';
import { FaSearch, FaPlus, FaChevronLeft, FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchExpense } from '../../redux/actions/expenses';
import './topfold.css';

const TopFold = () => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();

	const handleQuery = (e) => {
		setQuery(e.target.value);
		dispatch(searchExpense(e.target.value));
	};

	return (
		<div className='topfold'>
			{window.location.pathname === '/expense-tracker/' ? (
				<div className='home__topfold'>
					<div className='searchbar'>
						<FaSearch />
						<input
							value={query}
							placeholder='search for expenses'
							onChange={(e) => handleQuery(e)}
						/>
					</div>
					<Link to='/add-expense'>
						<div className='btn'>
							<FaPlus />
							<label>Add</label>
						</div>
					</Link>
				</div>
			) : (
				<div className='add__topfold'>
					<Link to='/'>
						<div className='btn'>
							<FaChevronLeft />
							<label>Back</label>
						</div>
					</Link>
					<Link to='/'>
						<div className='btn'>
							<FaTimes />
							<label>Cancel</label>
						</div>
					</Link>
				</div>
			)}
		</div>
	);
};

export default TopFold;
