import React, { useEffect, useState } from 'react';
// import './MenClothes.css';
import { Typography, Grid, Button, CircularProgress } from '@material-ui/core';

import axios from 'axios';
import Product from '../product/Product';
import Footer from '../footer/Footer';
const Womens = () => {
	const [women, setwomen] = useState([]);
	console.log('i am ', typeof women);
	console.log(women);
	useEffect(() => {
		var options = {
			method: 'GET',
			url: 'https://rapidapi.p.rapidapi.com/products/v2/list',
			params: {
				offset: '0',
				categoryId: '4209',
				limit: '48',
				store: 'US',
				country: 'US',
				currency: 'USD',
				sort: 'freshness',
				lang: 'en-US',
				q: 'women',
				sizeSchema: 'US',
			},
			headers: {
				'x-rapidapi-host': 'asos2.p.rapidapi.com',
				'x-rapidapi-key': '583c0bbb31msh25aee6af24c8df9p1f6b0ajsn4488c2bd87b7',
			},
		};

		axios
			.request(options)
			.then(function (response) {
				// console.log(response.data);
				setwomen(response.data);
				console.log(typeof women);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	return (
		<Grid container className="men">
			<Grid item xs={12} md={12} sm={12} lg={12} className="men_banner">
				<Typography
					className="men_banner_brand"
					variant="h3"
					style={{ color: '#fff' }}
				>
					Women
				</Typography>
				<Button className="men_banner_items">view all</Button>
				<Button className="men_banner_items">casual</Button>
				<Button className="men_banner_items">shirts</Button>
				<Button className="men_banner_items">trousers</Button>
				<Button className="men_banner_items">hoodies</Button>
				<Button className="men_banner_items">more</Button>
			</Grid>
			<Grid container>
				{women.length === 0 ? (
					<CircularProgress style={{ color: '#adadad', textAlign: 'center' }} />
				) : (
					// Object.keys(women).products.map((item) => console.log(item))

					// console.log(women.products)
					women.products.map((item) => (
						<Product
							id={item.id}
							name={item.name}
							image={item.imageUrl}
							price={item.price.current.text}
						/>
					))
				)}
			</Grid>
		</Grid>
	);
};

export default Womens;
