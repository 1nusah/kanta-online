import React from 'react';
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
import swal from 'sweetalert';
const Checkout = () => {
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
							style={{
								width: '45%',
								marginRight: '10%',
							}}
							size="medium"
						/>
						<TextField
							label="Last Name"
							variant="filled"
							className="text_field"
							style={{ width: '45%' }}
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<TextField
							label="Company Name(Optional)"
							variant="filled"
							className="text_field"
							fullWidth
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<TextField
							label="Country"
							variant="filled"
							className="text_field"
							fullWidth
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<TextField
							label="Street Address"
							variant="filled"
							fullWidth
							className="text_field"
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<TextField
							label="City/Town"
							fullWidth
							variant="filled"
							className="text_field"
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<TextField
							label="Country"
							fullWidth
							variant="filled"
							className="text_field"
						/>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<TextField
							label="Phone"
							variant="filled"
							className="text_field"
							fullWidth
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
							<Button
								variant="contained"
								style={{ backgroundColor: 'inherit', color: '#adadad' }}
								onClick={() => {
									swal({
										title: 'Your order is successful!',
										text: 'Thank you!',
										icon: 'success',
										width: '800px',
									});
								}}
							>
								Place Order
							</Button>
						</div>
					</div>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Checkout;
