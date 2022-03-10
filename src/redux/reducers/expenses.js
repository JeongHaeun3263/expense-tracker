import {
	ADD_EXPENSE,
	DELETE_EXPENSE,
	SEARCH_EXPENSE,
} from '../action-types/expenses';

const initialExpenseList = () => {
	const list = localStorage.getItem('expense-list');
	let expenses = [];
	if (list) {
		expenses = JSON.parse(list);
	}
	return expenses;
};

const getTotalAmount = () => {
	const list = localStorage.getItem('expense-list');
	let amountList = [];
	if (list) {
		amountList = JSON.parse(list).map((item) => item.amount);
	}
	const total = amountList.reduce((prev, curr) => prev + curr);
	return Math.round(total * 100) / 100;
};

const initialState = {
	expenseList: initialExpenseList(),
	query: '',
	total: getTotalAmount(),
};

export const expenseReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_EXPENSE: {
			localStorage.setItem(
				'expense-list',
				JSON.stringify([...state.expenseList, action.payload])
			);
			return {
				...state,
				expenseList: [...state.expenseList, action.payload],
			};
		}

		case DELETE_EXPENSE: {
			const { payload } = action;
			const updatedList = state.expenseList.filter(
				(item) => item.createdAt !== payload.createdAt
			);
			localStorage.setItem('expense-list', JSON.stringify(updatedList));
			return {
				...state,
				expenseList: updatedList,
			};
		}

		case SEARCH_EXPENSE: {
			const { payload } = action;
			return {
				...state,
				query: payload,
			};
		}

		default:
			return state;
	}
};
