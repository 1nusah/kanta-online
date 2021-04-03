import React from 'react';
import { Grid } from '@material-ui/core';
import Product from '../product/Product';
import ClothesBanner from '../banner/ClothesBanner';
import Loading from '../loading/loading';
import useRequest from '../../hooks/useRequest';
const Womens = () => {
	const women = useRequest('women');

	return (
		<>
			<h1>Women</h1>
			<Grid container  
			 spacing={3} className="men">
				<ClothesBanner classification="women" />
				<Grid container>
					{women.length === 0 ? (
						<Loading />
					) : (
						women.products.map((item) => (
							<Product
								key={item.id}
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
