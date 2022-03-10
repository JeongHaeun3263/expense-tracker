import {
	FaBook,
	FaStethoscope,
	FaCarrot,
	FaTshirt,
	FaBus,
	FaTag,
} from 'react-icons/fa';

export const categories = [
	{
		id: 1,
		title: 'Education',
		icon: <FaBook />,
		color: '#264653',
	},
	{
		id: 2,
		title: 'Helthcare',
		icon: <FaStethoscope />,
		color: '#2a9d8f',
	},
	{
		id: 3,
		title: 'Grocery',
		icon: <FaCarrot />,
		color: '#e9c46a',
	},
	{
		id: 4,
		title: 'Clothes',
		icon: <FaTshirt />,
		color: '#f4a261',
	},
	{
		id: 5,
		title: 'Travel',
		icon: <FaBus />,
		color: '#e76f51',
	},
	{
		id: 6,
		title: 'Others',
		icon: <FaTag />,
		color: '#e9d8a6',
	},
];
