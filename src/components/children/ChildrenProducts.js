import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ClothesBanner from '../banner/ClothesBanner';
import axios from 'axios';
import './ChildrenProducts.css';
import Loading from '../loading/loading';
import Product from '../product/Product';
const ChildrenProducts = () => {
	const [children, setchildren] = useState([]);
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
				q: 'child',
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
				setchildren(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);
	return (
		<>
			<h1>children</h1>
			<Grid container className="men">
				<ClothesBanner classification="children" />
				{children.length === 0 ? (
					<Loading />
				) : (
					children.products.map((item) => (
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

export default ChildrenProducts;
