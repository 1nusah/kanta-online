import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Loading from '../loading/loading';
import axios from 'axios';
import Product from './Product';
const RelatedProducts = ({ categoryOfProducts }) => {
	const [relatedProducts, setrelatedProducts] = useState([]);
	console.log('i am ', typeof relatedProducts);
	console.log(relatedProducts);
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
				'x-rapidapi-key': '583c0bbb31msh25aee6af24c8df9p1f6b0ajsn4488c2bd87b7',
			},
		};

		axios
			.request(options)
			.then(function (response) {
				setrelatedProducts(response.data);
				console.log(typeof relatedProducts);
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
