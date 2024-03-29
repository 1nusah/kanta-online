import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './Cart.css';

import DeleteIcon from '@material-ui/icons/Delete';
import { useStateValue } from '../../StateProvider';
import Ill from '../../assets/illustration/undraw_empty_cart_co35.svg';

const Cart = ({ id }) => {
	const [{ basket }, dispatch] = useStateValue();

	console.log(basket);

	const removeFromBasket = (id) => {
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
							<img src={Ill} width="100%" height="100%" alt="item" />
						</div>
						<div style={{ marginTop: '20px' }}>
							<h1>It's all lonely in here</h1>
						</div>
					</Grid>
				</Grid>
			) : (
				<div>
					<div
						style={{ marginTop: '5%', backgroundColor: '#333', width: '100%' }}
					>
						<div
							style={{
								display: 'grid',

								width: '100%',
								gridTemplateColumns: 'repeat(4, 1fr)',
							}}
						>
							<h3>Product</h3>
							<h3>Price</h3>
							<h3>Quantity</h3>
							<h3>Total</h3>
						</div>
						{basket.map((item) => (
							<div
								style={{
									display: 'grid',
									gridTemplateColumns: 'repeat(4,1fr)',
								}}
							>
								<div item xs={12} sm={12} md={3} lg={3} key={item.id}>
									<div style={{ display: 'flex', flexDirection: 'row' }}>
										<div style={{ width: '150px', height: '150px' }}>
											<img
												src={'https://' + item.image}
												height="auto"
												width="100%"
												alt="item"
											/>
										</div>
										<p style={{ paddingLeft: '5px' }}>{item.name}</p>
									</div>
								</div>
								<div item xs={12} sm={12} md={3} lg={3}>
									<p>{item.price}</p>
								</div>
								<div item xs={12} sm={12} md={3} lg={3}>
									<div style={{ display: 'flex', flexDirection: 'row' }}>
										<p style={{ marginRight: '5px', marginLeft: '5px' }}>
											{item.quantity}
										</p>
									</div>
								</div>
								<div item xs={12} sm={12} md={3} lg={3}>
									<div style={{ display: 'flex', flexDirection: 'row' }}>
										<p style={{ marginRight: '5px', marginLeft: '5px' }}>
											${item.quantity * item.price.substring(1)}
										</p>
										<DeleteIcon
											onClick={() => removeFromBasket(item.id)}
											style={{ marginLeft: '20px' }}
											className="delete"
										/>
									</div>
								</div>
							</div>
						))}
					</div>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<Link to="/checkout" className="header_link">
							<div style={{ paddingTop: 10 }}>
								<Button color="secondary" variant="contained">
									Proceed
								</Button>
							</div>
						</Link>
					</Grid>
				</div>
			)}
		</Grid>
	);
};

export default Cart;
