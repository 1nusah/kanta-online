import React, { useEffect, useState } from 'react';
// import './MenClothes.css';
import { Typography, Grid, Button, CircularProgress } from '@material-ui/core';

import axios from 'axios';
import Product from '../product/Product';
import Footer from '../footer/Footer';
import Banner from '../banner/Banner';
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
			<Banner classification="women" />
			<Grid container>
				{women.length === 0 ? (
					<CircularProgress style={{ color: '#adadad', textAlign: 'center' }} />
				) : (
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
