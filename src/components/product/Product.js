import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './Product.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStateValue } from '../../StateProvider';

const Product = ({ image, name, price, id, quantity }) => {
	// const [selectedItem, setselectedItem] = useState({});
	const history = useHistory();
	const [{ basket }, dispatch] = useStateValue();
	const handleSelect = () => {
		dispatch({
			type: 'SELECTED_ITEM',
			items: {
				id,
				name,
				image,
				price,
				quantity: 1,
			},
		});
		history.push('/productcheckout');
	};
	return (
		<Grid item xs={12} sm={12} md={3} lg={3} className="product">
			<div className="product_item">
				<img
					src={'https://' + image}
					alt={name}
					width="50%"
					height="auto"
					onClick={handleSelect}
				/>
				<p className="product_name" onClick={handleSelect}>
					{name}
				</p>
				<p className="product_price" onClick={handleSelect}>
					{price}
				</p>
			</div>
		</Grid>
	);
};
export default Product;
