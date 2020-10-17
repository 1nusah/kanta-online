import React from 'react';
import { Link } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import './Footer.css';

const Footer = () => {
	return (
		<Grid container className="footer">
			<Grid item xs={12} md={3} lg={3}>
				<div className="footer_header">
					<h3>Customer Service</h3>
				</div>
				<div className="footer_item">
					<Link to="/payment">
						<p>Payment</p>
					</Link>
					<Link>
						<p>Shopping</p>
					</Link>
					<Link>
						<p>Returns</p>
					</Link>
					<Link>
						<p>FAQ</p>
					</Link>
					<Link>
						<p>Product After Care</p>
					</Link>
					<Link>
						<p>Gift Cards</p>
					</Link>
				</div>
			</Grid>
			<Grid item xs={12} md={3} lg={3}>
				<div className="footer_header">
					<h3>Our Company</h3>
				</div>
				<div className="footer_item">
					<Link to="/about">
						<p>About Us</p>
					</Link>
					<p>Careers</p>
					<p>Corporate Responsibility</p>
					<p>Sustainability</p>
				</div>
			</Grid>
			<Grid item xs={12} md={3} lg={3}>
				<div className="footer_header">
					<h3>Legal</h3>
				</div>
				<div className="footer_item">
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
					<p>Data Production</p>
					<p>Site Accessibility</p>
				</div>
			</Grid>
			<Grid item xs={12} md={3} lg={3}>
				<div className="footer_header">
					<h3>Kanta Online</h3>
				</div>
				<div className="footer_item">
					<p>Oyarifa Niggas</p>
					<p>📞 :(+233)553208841</p>
					<p>Mon - Sat(7:00 - 19:00)</p>
				</div>
			</Grid>
		</Grid>
	);
};
export default Footer;
