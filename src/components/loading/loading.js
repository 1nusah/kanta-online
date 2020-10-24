import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
const Loading = () => {
	return (
		<Grid
			container
			justify="center"
			alignItems="center"
			style={{ textAlign: 'center' }}
		>
			<Grid item xs={12} md={12} lg={12} sm={12}>
				<CircularProgress style={{ color: '#adadad' }} />
			</Grid>
		</Grid>
	);
};

export default Loading;
