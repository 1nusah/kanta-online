import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import Product from '../product/Product';
import Loading from '../loading/loading';
const Shop = () => {
	const [shop, setshop] = useState([]);
	console.log('i am ', typeof shop);
	console.log(shop);
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
				q: 'shirt,women,men,child',
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
				setshop(response.data);
				console.log(typeof shop);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	return (
		<Grid container className="checkout_container">
			<Grid container>
				{shop.length === 0 ? (
					<Loading />
				) : (
					shop.products.map((item) => (
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

export default Shop;
