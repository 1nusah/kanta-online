import React, { useState } from 'react';
import './Checkout.css';
import {
	Grid,
	Typography,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	Button,
} from '@material-ui/core';
import { CssTextField } from '../input';
import { Link } from 'react-router-dom';

import { useStateValue } from '../../StateProvider';

const Checkout = () => {
	const [userDetails, setuserDetails] = useState([]);
	const [{ userDeets, basket }, dispatch] = useStateValue([]);
	const [value, setValue] = useState('');
	const handleChange = (event) => {
		setValue([...userDetails, { paymentOption: event.target.value }]);
		console.log(value);
	};
	const handleDeets = (event) => {
		const target = event.target;
		const name = target.name;
		setuserDetails([...userDetails, { [name]: target.value }]);
		console.log(userDetails);
		console.log(name);
	};
	const confirmDeets = () => {
		dispatch({
			type: 'CONFIRM_USER_DETAILS',
			userDeets: userDetails,
		});
	};
	let total = 0;

	return (
		<Grid container className="checkout_container">
			<Grid item xs={12} sm={12} md={12} lg={12} className="checkout_header">
				<Typography variant="h5">Checkout</Typography>
			</Grid>
			<Grid container>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<div style={{ marginBottom: '20px' }}>
						<CssTextField
							label="First Name"
							variant="filled"
							className="text_field"
							name="firstName"
							style={{
								width: '45%',
								marginRight: '10%',
								borderColor: '#f00',
							}}
							size="medium"
							onChange={handleDeets}
						/>
						<CssTextField
							label="Last Name"
							variant="filled"
							className="text_field"
							style={{ width: '45%' }}
							name="lastName"
							onChange={handleDeets}
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<CssTextField
							label="Company Name(Optional)"
							variant="filled"
							className="text_field"
							fullWidth
							name="companyName"
							onChange={handleDeets}
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<CssTextField
							label="Country"
							variant="filled"
							className="text_field"
							fullWidth
							name="country"
							onChange={handleDeets}
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<CssTextField
							label="City"
							fullWidth
							variant="filled"
							className="text_field"
							onChange={handleDeets}
							name="city"
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<CssTextField
							label="Town"
							variant="filled"
							fullWidth
							className="text_field"
							name="town"
							onChange={handleDeets}
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<CssTextField
							label="Street"
							variant="filled"
							fullWidth
							name="street"
							className="text_field"
							onChange={handleDeets}
						/>
					</div>

					<div style={{ marginBottom: '20px' }}>
						<CssTextField
							label="Zip Code"
							fullWidth
							variant="filled"
							name="zip"
							className="text_field"
							onChange={handleDeets}
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<CssTextField
							label="Phone"
							variant="filled"
							className="text_field"
							fullWidth
							name="phone"
							type="number"
							onChange={handleDeets}
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<div
						style={{
							backgroundColor: '#333',
							marginLeft: '25px',
							color: '#adadad',
							padding: '10px',
						}}
					>
						<Typography
							variant="h5"
							style={{
								color: '#adadad',
								borderBottom: '1px solid #adadad',
								marginBottom: '20px',
							}}
						>
							Order Details
						</Typography>
						{basket?.map((item) => {
							{
								total += Number(item.price.substring(1));
							}
							return (
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										paddingBottom: '10px',
									}}
								>
									<p style={{ textAlign: 'left', paddingRight: '50%' }}>
										{/* Haban Hoodie(qty. 5) */}
										{item.name}
									</p>
									<p style={{ textAlign: 'right', color: '#fff' }}>
										{item.price}
									</p>
								</div>
							);
						})}

						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								paddingBottom: '10px',
							}}
						>
							<p style={{ color: '#fff', paddingRight: '85%' }}>Total</p>
							<p style={{ color: '#fff' }}>${total + '.00'}</p>
						</div>
						<FormControl component="fieldset">
							<RadioGroup onChange={handleChange} name="paymentOptions">
								<FormControlLabel
									value="Direct Bank Transfer"
									label="Direct Bank Transfer"
									control={<Radio style={{ color: '#adadad' }} />}
								/>
								<FormControlLabel
									value="Cash On Delivery"
									label="Cash On Delivery"
									control={<Radio style={{ color: '#adadad' }} />}
								/>
								<FormControlLabel
									value="Paypal"
									label="Paypal"
									control={<Radio style={{ color: '#adadad' }} />}
								/>
								<FormControlLabel
									value="MoMo"
									label="MoMo"
									control={<Radio style={{ color: '#adadad' }} />}
								/>
							</RadioGroup>
						</FormControl>
						<div style={{ textAlign: 'center' }}>
							<Link to="/success">
								<Button
									variant="contained"
									style={{ backgroundColor: 'inherit', color: '#adadad' }}
									onClick={confirmDeets}
								>
									Place Order
								</Button>
							</Link>
						</div>
					</div>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Checkout;
