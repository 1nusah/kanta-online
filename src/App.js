import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Button } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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
const theme = createMuiTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: '#333333',
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary: {
			// light: '#adadad',
			main: '#adadad',
			// dark: will be calculated from palette.secondary.main,
			// contrastText: '#ffcc00',
		},
	},
});
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Header />
				<Switch>
					<Route path="/men">
						<h1>Men</h1>
						<Mens />
					</Route>
					<Route path="/success">
						<OrderSuccess />
					</Route>
					<Route path="/shop">
						<Shop />
					</Route>
					<Route path="/women">
						<h1>WomMen</h1>
						<Womens />
					</Route>
					<Route path="/bags">
						<h1>bags</h1>
						<BagProducts />
					</Route>
					<Route path="/shoes">
						<h1>shoes</h1>
						<ShoeProducts />
					</Route>
					<Route path="/children">
						<h1>children</h1>
						<ChildrenProducts />
					</Route>
					<Route path="/checkout">
						<h1>Checkout</h1>
						<Checkout />
					</Route>
					<Route path="/cart">
						<Cart />
					</Route>
					<Route path="/productcheckout">
						<ProductCheckOut />
					</Route>
					<Route path="/search">
						<Search />
					</Route>
					<Route path="/searchResults">
						<SearchResults />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</ThemeProvider>
	);
}

export default App;
