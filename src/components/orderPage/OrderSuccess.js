import React from 'react';
import { Grid } from '@material-ui/core';
import './OrderSuccess.css';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
const OrderSuccess = () => {
	return (
		<Grid container justify="center" alignItems="center">
			<Grid container justify="center" alignItems="center" className="success">
				<Grid item xs={12} md={12} lg={12} sm={12}>
					{/* <CheckCircleIcon style={{ fontSize: 300, color: '#adadad' }} /> */}
					<div>
						<DoneIcon
							style={{ fontSize: 300, color: '#adadad', marginBottom: 0 }}
						/>
						<h1>Your order is successful</h1>
					</div>
					<div>
						<p style={{ marginLeft: '10%', marginRight: '10%', fontSize: 20 }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							nesciunt vitae aspernatur, dolor eligendi cupiditate, similique
							delectus nostrum magnam facere quae ratione est eos ea doloribus
							et inventore id velit.
						</p>
					</div>
					<div style={{ paddingTop: '5%' }}>
						<Link to="/" style={{ textDecoration: 'none' }}>
							<Button
								variant="contained"
								style={{
									backgroundColor: 'inherit',
									color: '#adadad',
									border: '2px solid #adadad',
									borderRadius: 25,
								}}
							>
								Return Shopping
							</Button>
						</Link>
					</div>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default OrderSuccess;
