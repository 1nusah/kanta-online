import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ClothesBanner from '../banner/ClothesBanner';
import axios from 'axios';
import './ShoeProduct.css';
import Loading from '../loading/loading';
import Product from '../product/Product';
const ShoeProducts = () => {
	const [shoes, setshoes] = useState([]);
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
				q: 'shoe',
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
				setshoes(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);
	return (
		<>
			<h1>shoes</h1>
			<Grid container className="men">
				<ClothesBanner classification="shoes" />
				{shoes.length === 0 ? (
					<Loading />
				) : (
					shoes.products.map((item) => (
						<Product
							id={item.id}
							name={item.name}
							image={item.imageUrl}
							price={item.price.current.text}
						/>
					))
				)}
			</Grid>
		</>
	);
};

export default ShoeProducts;
