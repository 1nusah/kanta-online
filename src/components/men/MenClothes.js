import React from 'react';
import './MenClothes.css';
import { Typography, Grid, Button } from '@material-ui/core';
import Product from '../product/Product';
import Footer from '../footer/Footer';
const Mens = () => {
	return (
		<Grid container className="men">
			<Grid item xs={12} md={12} sm={12} lg={12} className="men_banner">
				<Typography
					className="men_banner_brand"
					variant="h3"
					style={{ color: '#fff' }}
				>
					Men
				</Typography>
				<Button className="men_banner_items">view all</Button>
				<Button className="men_banner_items">casual</Button>
				<Button className="men_banner_items">shirts</Button>
				<Button className="men_banner_items">trousers</Button>
				<Button className="men_banner_items">hoodies</Button>
				<Button className="men_banner_items">more</Button>
			</Grid>
			<Grid container></Grid>
			<Footer />
		</Grid>
	);
};

export default Mens;
