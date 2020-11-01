import React, { useState } from 'react';
import './Checkout.css';
import {
	Grid,
	Typography,
	TextField,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
const Checkout = () => {
	const [userDetails, setuserDetails] = useState([]);
	const handleFirstName = (e) => {
		setuserDetails([...userDetails, { firstName: e.target.value }]);
		console.log(userDetails);
	};
	const handleLastName = (e) => {
		setuserDetails([...userDetails, { lastName: e.target.value }]);
		console.log(userDetails);
	};
	const handleCompanyName = (e) => {
		setuserDetails([...userDetails, { company: e.target.value }]);
		console.log(userDetails);
	};
	const handleCountry = (e) => {
		setuserDetails([...userDetails, { country: e.target.value }]);
		console.log(userDetails);
	};
	const handleTown = (e) => {
		setuserDetails([...userDetails, { town: e.target.value }]);
		console.log(userDetails);
	};
	const handleStreet = (e) => {
		setuserDetails([...userDetails, { street: e.target.value }]);
		console.log(userDetails);
	};
	const handleZip = (e) => {
		setuserDetails([...userDetails, { zip: e.target.value }]);
		console.log(userDetails);
	};
	const handlePhone = (e) => {
		setuserDetails([...userDetails, { phone: e.target.value }]);
		console.log(userDetails);
	};
	const handleCity = (e) => {
		setuserDetails([...userDetails, { city: e.target.value }]);
		console.log(userDetails);
	};

	return (
		<Grid container className="checkout_container">
			<Grid item xs={12} sm={12} md={12} lg={12} className="checkout_header">
				<Typography variant="h5">Checkout</Typography>
			</Grid>
			<Grid container>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<div style={{ marginBottom: '20px' }}>
						<TextField
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
							onChange={handleFirstName}
						/>
						<TextField
							label="Last Name"
							variant="filled"
							className="text_field"
							style={{ width: '45%' }}
							onChange={handleLastName}
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<TextField
							label="Company Name(Optional)"
							variant="filled"
							className="text_field"
							fullWidth
							onChange={handleCompanyName}
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<TextField
							label="Country"
							variant="filled"
							className="text_field"
							fullWidth
							onChange={handleCountry}
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<TextField
							label="City"
							fullWidth
							variant="filled"
							className="text_field"
							onChange={handleCity}
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<TextField
							label="Town"
							variant="filled"
							fullWidth
							className="text_field"
							onChange={handleTown}
						/>
					</div>

					<div style={{ marginBottom: '20px' }}>
						<TextField
							label="Zip Code"
							fullWidth
							type="number"
							variant="filled"
							className="text_field"
							onChange={handleZip}
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<TextField
							label="Phone"
							variant="filled"
							className="text_field"
							fullWidth
							type="number"
							onChange={handlePhone}
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
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								paddingBottom: '10px',
							}}
						>
							<p style={{ textAlign: 'left', paddingRight: '50%' }}>
								Haban Hoodie(qty. 5)
							</p>
							<p style={{ textAlign: 'right' }}>$750</p>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								paddingBottom: '10px',
							}}
						>
							<p style={{ textAlign: 'left', paddingRight: '50%' }}>
								Haban Hoodie(qty. 5)
							</p>
							<p style={{ textAlign: 'right' }}>$750</p>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								paddingBottom: '10px',
							}}
						>
							<p style={{ color: '#fff', paddingRight: '71.5%' }}>Total</p>
							<p style={{ color: '#fff' }}>$750</p>
						</div>
						<FormControl component="fieldset">
							<RadioGroup>
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
