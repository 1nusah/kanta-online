import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Button from '@material-ui/core/Button';
import { Typography, Grid } from '@material-ui/core';
import Floral from '../../assets/images/toni-hukkanen-lO-p5nHKSVQ-unsplash.jpg';
import Outdoor from '../../assets/images/outdoor.jpg';
import Summer from '../../assets/images/junko-nakase-Q-72wa9-7Dg-unsplash.jpg';
import Classic from '../../assets/images/laura-d-vargas-7AbaE-DDBd8-unsplash.jpg';
function Home() {
	return (
		<div className="home">
			<div className="home_button">
				<Button
					variant="contained"
					style={{
						backgroundColor: 'inherit',
						color: '#fff',
						border: '2px solid #fff',
						borderRadius: 30,
					}}
				>
					SHOP NOW
				</Button>
			</div>
			<div className="images">
				<div className="images_women">
					{/* <Typography style={{ color: '#fff' }} variant="h5">
						Women's Collection
					</Typography> */}
					<Button
						variant="contained"
						style={{
							backgroundColor: 'inherit',
							color: '#fff',
							border: '2px solid #fff',
							borderRadius: 30,
						}}
					>
						SHOP NOW
					</Button>
				</div>
				<div className="images_casual_wear">
					<Button
						variant="contained"
						style={{
							backgroundColor: 'inherit',
							color: '#fff',
							border: '2px solid #fff',
							borderRadius: 30,
						}}
					>
						SHOP NOW
					</Button>
				</div>
			</div>
			<Grid container style={{ borderTop: '5px solid #000' }}>
				<Grid className="outdoor" item xs={12} sm={12} md={6} lg={6}>
					<img width="100%" src={Outdoor} width="100%" height="auto" />
				</Grid>
				<Grid className="floral" item xs={12} sm={12} md={6} lg={6}>
					<Link to="/floral">
						<img src={Floral} width="100%" height="auto" />
					</Link>
				</Grid>
				<Grid className=" summer" item xs={12} sm={12} md={6} lg={6}>
					<img src={Summer} width="100%" height="auto" />
				</Grid>
				<Grid className="classic" item xs={12} sm={12} md={6} lg={6}>
					<img src={Classic} width="100%" height="auto" />
				</Grid>
			</Grid>
		</div>
	);
}
export default Home;
