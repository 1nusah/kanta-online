import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Mens from './components/men/MenClothes';
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/men">
					<Header />
					<h1>Men</h1>
					<Mens />
				</Route>
				<Route path="/women">
					<Header />
					<h1>WomMen</h1>
				</Route>
				<Route path="/bags">
					<h1>bags</h1>
				</Route>
				<Route path="/shoes">
					<Header />
					<h1>shoes</h1>
				</Route>
				<Route path="/children">
					<Header />
					<h1>children</h1>
				</Route>
				<Route path="/checkout">
					<h1>Checkout</h1>
				</Route>
				<Route path="/login">
					<h1>Login</h1>
				</Route>
				<Route path="/">
					<h1>hello world</h1>
					<Header />
					<Home />
					<Footer />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
