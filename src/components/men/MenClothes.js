import React, { useEffect, useState } from 'react';
import './MenClothes.css';
import { Grid } from '@material-ui/core';

import axios from 'axios';
import Product from '../product/Product';
import ClothesBanner from '../banner/ClothesBanner';
import Loading from '../loading/loading';
const Mens = () => {
	const [menShirt, setmenShirt] = useState([]);
	console.log('i am ', typeof menShirt);
	console.log(menShirt);
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
				'x-rapidapi-key': '583c0bbb31msh25aee6af24c8df9p1f6b0ajsn4488c2bd87b7',
			},
		};

		axios
			.request(options)
			.then(function (response) {
				// console.log(response.data);
				setmenShirt(response.data);
				console.log(typeof menShirt);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	return (
		<Grid container className="men">
			<ClothesBanner classification="Men" />
			<Grid container>
				{menShirt.length === 0 ? (
					<Loading />
				) : (
					// Object.keys(menShirt).products.map((item) => console.log(item))

					// console.log(menShirt.products)
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
