import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './Cart.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStateValue } from '../../StateProvider';
import Ill from '../../assets/illustration/undraw_empty_cart_co35.svg';

const Cart = ({ id }) => {
	const [{ basket }, dispatch] = useStateValue();
	console.log('basket is ', typeof basket);
	const mainTotal = 0;
	console.log(basket);
	const removeFromBasket = () => {
		//to remove the item from the baskets
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id,
		});
	};
	return (
		<Grid container className="cart">
			<Grid item xs={12} sm={12} lg={12} md={12}>
				<h1>Cart</h1>
			</Grid>
			{basket.length === 0 ? (
				<Grid
					container
					justify="center"
					alignItems="center"
					style={{ textAlign: 'center' }}
				>
					<Grid item xs={12} sm={12} lg={12} md={12}>
						<div style={{ height: '50vh' }}>
							<img src={Ill} width="100%" height="100%" />
						</div>
						<div style={{ marginTop: '20px' }}>
							<h1>Go shop and come back</h1>
						</div>
					</Grid>
				</Grid>
			) : (
				<div>
					<Grid container style={{ marginTop: '5%', backgroundColor: '#333' }}>
						<Grid
							item
							xs={12}
							md={12}
							sm={12}
							lg={12}
							style={{
								display: 'flex',
								flexDirection: 'row',
								marginBottom: '3%',
							}}
						>
							<h3 style={{ width: '25%' }}>Product</h3>
							<h3 style={{ width: '25%' }}>Price</h3>
							<h3 style={{ width: '25%' }}>Quantity</h3>
							<h3 style={{ width: '25%' }}>Total</h3>
						</Grid>
						{basket.map((item) => (
							<Grid container>
								<Grid item xs={12} sm={12} md={3} lg={3} key={item.id}>
									<div style={{ display: 'flex', flexDirection: 'row' }}>
										<div style={{ width: '150px', height: '150px' }}>
											<img
												src={'https://' + item.image}
												height="auto"
												width="100%"
											/>
										</div>
										<p style={{ paddingLeft: '5px' }}>{item.name}</p>
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={3} lg={3}>
									<p>{item.price}</p>
								</Grid>
								<Grid item xs={12} sm={12} md={3} lg={3}>
									<div style={{ display: 'flex', flexDirection: 'row' }}>
										{/* <RemoveCircleIcon /> */}
										<p style={{ marginRight: '5px', marginLeft: '5px' }}>
											{item.quantity}
										</p>
										{/* <AddCircleIcon /> */}
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={3} lg={3}>
									<div style={{ display: 'flex', flexDirection: 'row' }}>
										<p style={{ marginRight: '5px', marginLeft: '5px' }}>
											${item.quantity * item.price.substring(1)}
										</p>
										<DeleteIcon
											onClick={removeFromBasket}
											style={{ marginLeft: '20px' }}
										/>
									</div>
								</Grid>
							</Grid>
						))}
					</Grid>
					<Grid container justify="center" alignItems="center">
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<Link to="/checkout" className="header_link">
								<div className="productcheckout_button">
									<Button style={{ color: '#adadad' }}>Proceed</Button>
								</div>
							</Link>
						</Grid>
					</Grid>
				</div>
			)}
		</Grid>
	);
};

export default Cart;
