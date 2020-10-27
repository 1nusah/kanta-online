import React from 'react';
import { Grid } from '@material-ui/core';
import './OrderSuccess.css';
import swal from 'sweetalert';
const OrderSuccess = () => {
	return (
		<Grid container className="success">
			<Grid item xs={12} md={12} lg={12} sm={12}>
				<h1>Your order is successful</h1>
				<h1>Your order is successful</h1>
				<h1>Your order is successful</h1>
				<h1>Your order is successful</h1>
				<h1>Your order is successful</h1>
			</Grid>
		</Grid>
	);
};

export default OrderSuccess;
