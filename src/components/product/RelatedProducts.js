import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Loading from '../loading/loading';
import axios from 'axios';
import Product from './Product';
const RelatedProducts = ({ categoryOfProducts }) => {
	const [relatedProducts, setrelatedProducts] = useState([]);

	useEffect(() => {
		var options = {
			method: 'GET',
			url: 'https://rapidapi.p.rapidapi.com/products/v2/list',
			params: {
				offset: '0',
				categoryId: '4209',
				limit: '4',
				store: 'US',
				country: 'US',
				currency: 'USD',
				sort: 'freshness',
				lang: 'en-US',
				q: categoryOfProducts,
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
				setrelatedProducts(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);
	return (
		<Grid container>
			{relatedProducts.length === 0 ? (
				<Loading />
			) : (
				relatedProducts.products.map((item) => (
					<Product
						id={item.id}
						name={item.name}
						image={item.imageUrl}
						price={item.price.current.text}
					/>
				))
			)}
		</Grid>
	);
};
export default RelatedProducts;
