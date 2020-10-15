import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/checkout">
					<h1>Checkout</h1>
				</Route>
				<Route path="/login">
					<h1>Login</h1>
				</Route>
				<Route path="/">
					<h1>hello world</h1>
					<Header />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
