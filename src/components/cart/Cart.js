import React from 'react';
import { Grid } from '@material-ui/core';
import './Cart.css';
const Cart = () => {
	return (
		<Grid container className="cart">
			<Grid item xs={12} sm={12} lg={12} md={12}>
				<h1>Cart</h1>
			</Grid>
			<Grid container>
				<Grid item>
					<h1>Hey there bro</h1>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Cart;
