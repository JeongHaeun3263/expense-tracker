import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../card';
import './expense-list.css';

const ExpenseList = () => {
	const [total, setTotal] = useState(0);
	const { expenseList: list, query } = useSelector((state) => state.expenses);

	const filteredList = list.filter((item) => item.title.includes(query));

	const getTotal = () => {
		if (list.length > 0) {
			let amountList = [];
			amountList = list.map((item) => item.amount);
			const total = amountList.reduce((prev, curr) => prev + curr);
			setTotal(Math.round(total * 100) / 100);
		}
	};

	useEffect(() => {
		getTotal();
	}, [list]);

	return (
		<div className='expense-list'>
			<p className='expense-list__total'>Total: ${total}</p>
			{filteredList.length ? (
				filteredList.map((item) => <Card key={item.createdAt} item={item} />)
			) : (
				<p className='expense-list__alert'>No item</p>
			)}
		</div>
	);
};

export default ExpenseList;
