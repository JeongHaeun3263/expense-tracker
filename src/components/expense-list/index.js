import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../card';
import './expense-list.css';

const ExpenseList = () => {
	const [totalAmount, setTotalAmount] = useState();

	const {
		expenseList: list,
		query,
		total,
	} = useSelector((state) => state.expenses);

	const filteredList = list.filter((item) => item.title.includes(query));

	useEffect(() => {
		setTotalAmount(totalAmount);
	}, [total]);

	return (
		<div className='expense-list'>
			<p className='expense-list__total'>Total: ${total}</p>
			{filteredList.length ? (
				filteredList.map((item) => <Card key={item.createdAt} item={item} />)
			) : (
				<p>No List</p>
			)}
		</div>
	);
};

export default ExpenseList;
