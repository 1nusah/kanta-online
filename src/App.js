import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Mens from './components/men/MenClothes';
import Cart from './components/cart/Cart';
import ProductCheckOut from './components/productCheckout/ProductCheckout';
import Checkout from './components/checkout/CheckOut';
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/men">
					<Header />
					<h1>Men</h1>
					<Mens />
					<Footer />
				</Route>
				<Route path="/women">
					<Header />
					<h1>WomMen</h1>
					<Footer />
				</Route>
				<Route path="/bags">
					<Header />
					<h1>bags</h1>
					<Footer />
				</Route>
				<Route path="/shoes">
					<Header />
					<h1>shoes</h1>
					<Footer />
				</Route>
				<Route path="/children">
					<Header />
					<h1>children</h1>
				</Route>
				<Route path="/checkout">
					<h1>Checkout</h1>
					<Checkout />
				</Route>
				<Route path="/cart">
					<Cart />
					<Footer />
				</Route>
				<Route path="/productcheckout">
					<Header />
					<ProductCheckOut />
					<Footer />
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
