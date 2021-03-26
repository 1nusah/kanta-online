import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import ClothesBanner from '../banner/ClothesBanner';
import axios from 'axios';
import './ChildrenProducts.css';
import Loading from '../loading/loading';
import Product from '../product/Product';
import useRequest from '../../hooks/useRequest';
const ChildrenProducts = () => {
	const children = useRequest('child');
	return (
		<>
			<h1>children</h1>
			<Grid container className="men">
				<ClothesBanner classification="children" />
				{children.length === 0 ? (
					<Loading />
				) : (
					<Fragment>
						{children.products.map((item) => (
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

export default ChildrenProducts;
