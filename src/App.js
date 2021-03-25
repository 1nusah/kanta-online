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
import Womens from './components/women/women';
import ChildrenProducts from './components/children/ChildrenProducts';
import BagProducts from './components/bags/BagProducts';
import ShoeProducts from './components/shoes/ShoeProducts';
import OrderSuccess from './components/orderPage/OrderSuccess';
import Shop from './components/shop/Shop';
import Search from './components/search/search';
import SearchResults from './components/search/searchResults';
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
				<Route path="/success">
					<Header />
					<OrderSuccess />
					<Footer />
				</Route>
				<Route path="/shop">
					<Header />
					<Shop />
					<Footer />
				</Route>
				<Route path="/women">
					<Header />
					<h1>WomMen</h1>
					<Womens />
					<Footer />
				</Route>
				<Route path="/bags">
					<Header />
					<h1>bags</h1>
					<BagProducts />
					<Footer />
				</Route>
				<Route path="/shoes">
					<Header />
					<h1>shoes</h1>
					<ShoeProducts />
					<Footer />
				</Route>
				<Route path="/children">
					<Header />
					<h1>children</h1>
					<ChildrenProducts />
					<Footer />
				</Route>
				<Route path="/checkout">
					<Header />
					<h1>Checkout</h1>
					<Checkout />
					<Footer />
				</Route>
				<Route path="/cart">
					<Header />
					<Cart />
					<Footer />
				</Route>
				<Route path="/productcheckout">
					<Header />
					<ProductCheckOut />
					<Footer />
				</Route>
				<Route path="/search">
					<Header />
					<Search />
					<Footer />
				</Route>
				<Route path="/searchResults">
					<Header />
					<SearchResults />
					<Footer />
				</Route>
				<Route path="/">
					<Header />
					<Home />
					<Footer />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
// said push
