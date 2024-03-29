import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Floral from '../../assets/images/toni-hukkanen-lO-p5nHKSVQ-unsplash.jpg';

import Classic from '../../assets/images/laura-d-vargas-7AbaE-DDBd8-unsplash.jpg';

import Outdoor1 from '../../assets/images/pexels-vova-krasilnikov-2698844.jpg';
import Vintage from '../../assets/images/pexels-chloe-kala-1043473.jpg';
function Home() {
	return (
		<div className="home">
			<div className="home_button">
				<Link to="/shop" className="header_link">
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
				</Link>
			</div>
			<div className="images">
				<div className="images_women">
					<Link to="/shop" className="header_link">
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
					</Link>
				</div>
				<div className="images_casual_wear">
					<Link to="/shop" className="header_link">
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
					</Link>
				</div>
			</div>
			<Grid container style={{ borderTop: '5px solid #000' }}>
				<Grid
					className="outdoor"
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					style={{ borderRight: '10px solid' }}
				>
					<img width="100%" src={Outdoor1} width="100%" height="auto" />
				</Grid>
				<Grid
					className="floral"
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					style={{ borderRight: '10px solid' }}
				>
					<Link to="/floral">
						<img src={Floral} width="100%" height="auto" />
					</Link>
				</Grid>
				<Grid
					className=" summer"
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					style={{ borderRight: '10px solid' }}
				>
					<img src={Vintage} width="100%" height="auto" />
				</Grid>
				<Grid
					className="classic"
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					style={{ borderRight: '10px solid' }}
				>
					<img src={Classic} width="100%" height="auto" />
				</Grid>
			</Grid>
		</div>
	);
}
export default Home;
