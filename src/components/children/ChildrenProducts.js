import React from 'react';
import Grid from '@material-ui/core/Grid';
import ClotehesBanner from '../banner/ClothesBanner';
import './ChildrenProducts.css';
const ChildrenProducts = () => {
	return (
		<Grid container className="men">
			<ClotehesBanner classification="Children" />
		</Grid>
	);
};

export default ChildrenProducts;
