import React from 'react';
import Mens from '../components/men/MenClothes';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import Cart from '../components/cart/Cart';
import ProductCheckOut from '../components/productCheckout/ProductCheckout';
import Checkout from '../components/checkout/CheckOut';
import Womens from '../components/women/women';
import ChildrenProducts from '../components/children/ChildrenProducts';
import BagProducts from '../components/bags/BagProducts';
import ShoeProducts from '../components/shoes/ShoeProducts';
import OrderSuccess from '../components/orderPage/OrderSuccess';
import Shop from '../components/shop/Shop';
import Search from '../components/search/search';
import SearchResults from '../components/search/searchResults';

const routes = [
	{
		path: '/men',
		component: <Mens />,
	},
	{
		path: '/success',
		component: <OrderSuccess />,
	},
	{
		path: '/shop',
		component: <Shop />,
	},
	{
		path: '/women',
		component: <Womens />,
	},
	{
		path: '/bags',
		component: <BagProducts />,
	},
	{
		path: '/shoes',
		component: <ShoeProducts />,
	},
	{
		path: '/children',
		component: <ChildrenProducts />,
	},
	{
		path: '/cart',
		component: <Cart />,
	},
	{
		path: '/productcheckout',
		component: <ProductCheckOut />,
	},
	{
		path: '/search',
		component: <Search />,
	},
	{
		path: '/searchResults',
		component: <SearchResults />,
	},
	{
		path: '/',
		component: <Home />,
	},
];

export const renderRoutes = (
	<Switch>
		{routes.map((route) => (
			<Route key={route.path} path={route.path}>
				{route.component}
			</Route>
		))}
	</Switch>
);
