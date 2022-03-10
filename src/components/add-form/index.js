import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaSave } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { categories } from '../../constants/add-expense';
import { addExpense } from '../../redux/actions/expenses';
import './add-form.css';

const AddForm = () => {
	const cat = categories;
	const [isCategoryOpen, setIsCategoryOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [category, setCategory] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const redirect = () => {
		navigate('/');
	};

	const handleTitle = (e) => {
		setTitle(e.target.value);
	};

	const handleAmount = (e) => {
		const val = parseFloat(e.target.value);
		if (isNaN(val)) {
			setAmount('');
			return;
		}
		setAmount(val);
	};

	const notify = (msg) => {
		return toast(msg);
	};

	const handleCategory = (category) => {
		setCategory(category);
		setIsCategoryOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title === '' || amount === '' || !category) {
			notify('Please enter the valid data');
			return;
		}
		const data = {
			title,
			amount,
			category,
			createdAt: new Date(),
		};
		dispatch(addExpense(data));
		notify('Saved. Redirecting to Home');
		setTimeout(() => {
			redirect();
		}, 1500);
	};

	return (
		<Fragment>
			<ToastContainer
				position='bottom-left'
				autoClose={900}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
			/>

			<div className='add-form'>
				<div className='form__item'>
					<label>Title</label>
					<input
						type='text'
						placeholder='Title'
						value={title}
						onChange={(e) => handleTitle(e)}
					/>
				</div>
				<div className='form__item'>
					<label>Amount $</label>
					<input
						type='number'
						placeholder='00.00'
						value={amount}
						onChange={(e) => handleAmount(e)}
					/>
				</div>
				<div className='category-container-parent'>
					<div className='category'>
						<div
							className='category-dropdown'
							onClick={() => setIsCategoryOpen(!isCategoryOpen)}
						>
							<label>{category ? category.title : 'Category'}</label>
							<FaChevronDown />
						</div>
						{isCategoryOpen && (
							<div className='category-container'>
								{cat.map((category) => (
									<div
										key={category.id}
										className='category-item'
										style={{
											backgroundColor: `${category.color}`,
											color: '#fff',
										}}
										onClick={() => handleCategory(category)}
									>
										<label>{category.title}</label>
										<span>{category.icon}</span>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
				<div className='btn form-add-btn' onClick={handleSubmit}>
					<label>save</label>
					<FaSave />
				</div>
			</div>
		</Fragment>
	);
};

export default AddForm;
