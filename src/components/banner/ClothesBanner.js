import React from 'react';
import { Typography, Grid, Button, CircularProgress } from '@material-ui/core';
const ClothesBanner = ({ classification }) => {
	return (
		<Grid container>
			<Grid item xs={12} md={12} sm={12} lg={12} className="men_banner">
				<Typography
					className="men_banner_brand"
					variant="h3"
					style={{ color: '#fff' }}
				>
					{classification}
				</Typography>
				<Button className="men_banner_items">view all</Button>
				<Button className="men_banner_items">casual</Button>
				<Button className="men_banner_items">shirts</Button>
				<Button className="men_banner_items">trousers</Button>
				<Button className="men_banner_items">hoodies</Button>
				<Button className="men_banner_items">more</Button>
			</Grid>
		</Grid>
	);
};

export default ClothesBanner;
