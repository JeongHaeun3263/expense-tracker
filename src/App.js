import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';
import AddExpense from './pages/add-expense';
import './App.css';

function App() {
	return (
		<div className='app'>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Header />
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/add-expense' exact element={<AddExpense />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
