import React, { Fragment } from 'react';
import './MenClothes.css';
import { Grid } from '@material-ui/core';
import Product from '../product/Product';
import ClothesBanner from '../banner/ClothesBanner';
import Loading from '../loading/loading';
import useRequest from '../../hooks/useRequest';
const Mens = () => {
	const menShirt = useRequest('men,hoodie');
	return (
		<>
			<h1>Men</h1>
			<Grid container className="men">
				<ClothesBanner classification="men" />
				<Grid
					container
					justify="center"
					alignItems="center"
					style={{ paddingBottom: '10px' }}
				>
					{menShirt.length === 0 ? (
						<Loading />
					) : (
						<Fragment>
							{menShirt.products.map((item) => (
								<Product
									key={item.id}
									id={item.id}
									name={item.name}
									image={item.imageUrl}
									price={item.price.current.text}
								/>
							))}
						</Fragment>
					)}
				</Grid>
			</Grid>
		</>
	);
};

export default Mens;
