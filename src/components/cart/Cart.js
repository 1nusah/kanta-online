import React from 'react';
import { Grid } from '@material-ui/core';

import './Cart.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStateValue } from '../../StateProvider';
import Ill from '../../assets/illustration/undraw_empty_cart_co35.svg';
const Cart = () => {
	const [{ basket }, dispatch] = useStateValue();
	console.log('basket is ', typeof basket);
	const mainTotal = 0;
	console.log(basket);
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
				basket.map((item) => (
					<Grid
						container
						style={{ marginTop: '5%', backgroundColor: '#333' }}
						key={item.id}
					>
						<Grid item xs={12} sm={12} md={3} lg={3}>
							<h3>Product</h3>
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<div style={{ width: '200px', height: '150px' }}>
									<img
										src={'https://' + item.image}
										height="auto"
										width="100%"
									/>
								</div>
								<p>{item.name}</p>
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={3} lg={3}>
							<h3>Price</h3>
							<p>{item.price}</p>
						</Grid>
						<Grid item xs={12} sm={12} md={3} lg={3}>
							<h3>Quantity</h3>
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								{/* <RemoveCircleIcon /> */}
								<p style={{ marginRight: '5px', marginLeft: '5px' }}>
									{item.quantity}
								</p>
								{/* <AddCircleIcon /> */}
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={3} lg={3}>
							<h3>Total</h3>
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<p style={{ marginRight: '5px', marginLeft: '5px' }}>
									${item.quantity * item.price.substring(1)}
								</p>
								<DeleteIcon style={{ marginLeft: '20px' }} />
							</div>
						</Grid>
						{/* <Grid container>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<h4>Total</h4>
							</Grid>
						</Grid> */}
					</Grid>
				))
			)}
		</Grid>
	);
};

export default Cart;
