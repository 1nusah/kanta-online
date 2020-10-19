import React from 'react';
import { Grid } from '@material-ui/core';
import './Product.css';
const RelatedProduct = ({ image, name, price, id }) => {
	return (
		<Grid item xs={12} sm={12} md={4} lg={4} className="product">
			<img src={image} alt={name} width="100%" height="auto" />

			<p className="product_name">{name}</p>
			<p className="product_price">{price} </p>
		</Grid>
	);
};
export default RelatedProduct;
