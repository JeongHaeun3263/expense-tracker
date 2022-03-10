import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/actions/expenses';
import { FaTrashAlt } from 'react-icons/fa';
import moment from 'moment';
import './card.css';

const Card = ({ item }) => {
	const dispatch = useDispatch();
	const time = moment(item.createdAt).fromNow();

	const handleDelete = () => {
		dispatch(deleteExpense(item));
	};

	return (
		<div
			className='card'
			style={{
				borderLeft: `10px solid ${item.category.color}`,
			}}
		>
			<div>
				<p className='card__title'>{item.title}</p>
				<p className='card__amount'>${item.amount}</p>
				<p className='card__time'>{time}</p>
			</div>
			<div className='card__btn'>
				<a onClick={handleDelete}>
					<FaTrashAlt />
				</a>
			</div>
		</div>
	);
};

export default Card;
