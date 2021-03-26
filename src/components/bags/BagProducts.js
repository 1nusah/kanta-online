import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import ClotehesBanner from '../banner/ClothesBanner';
import './BagProducts.css';
import Loading from '../loading/loading';
import Product from '../product/Product';
import useRequest from '../../hooks/useRequest';
const BagProducts = () => {
	const bags = useRequest('bag');
	return (
		<>
			<h1>bags</h1>
			<Grid container className="men">
				<ClotehesBanner classification="bags" />
				{bags.length === 0 ? (
					<Loading />
				) : (
					<Fragment>
						{bags.products.map((item) => (
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
		</>
	);
};

export default BagProducts;
