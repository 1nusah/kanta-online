import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import axios from 'axios';
import Product from '../product/Product';
import ClothesBanner from '../banner/ClothesBanner';
import Loading from '../loading/loading';
const Womens = () => {
	const [women, setwomen] = useState([]);

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
				'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
			},
		};

		axios
			.request(options)
			.then(function (response) {
				setwomen(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	return (
		<>
			<h1>Women</h1>
			<Grid container className="men">
				<ClothesBanner classification="women" />
				<Grid container>
					{women.length === 0 ? (
						<Loading />
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
		</>
	);
};

export default Womens;
