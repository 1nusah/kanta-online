import React, { useEffect, useState } from 'react';
import './MenClothes.css';
import { Grid } from '@material-ui/core';

import axios from 'axios';
import Product from '../product/Product';
import ClothesBanner from '../banner/ClothesBanner';
import Loading from '../loading/loading';
const Mens = () => {
	const [menShirt, setmenShirt] = useState([]);

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
				q: 'Men,Hoodie',
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
				setmenShirt(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	return (
		<Grid container className="men">
			<ClothesBanner classification="men" />
			<Grid container style={{ paddingBottom: '10px' }}>
				{menShirt.length === 0 ? (
					<Loading />
				) : (
					menShirt.products.map((item) => (
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

export default Mens;
