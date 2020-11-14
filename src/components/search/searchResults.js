import React from 'react';
import { Grid } from '@material-ui/core';
import Product from '../product/Product';
import Loading from '../loading/loading';
import { useStateValue } from '../../StateProvider';

const SearchResults = () => {
	const [{ searchResults }] = useStateValue();

	return (
		<Grid container className="men">
			<Grid container style={{ paddingTop: '5%' }}>
				{searchResults.length === 0 ? (
					<Loading />
				) : (
					searchResults.products.map((item) => (
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
export default SearchResults;
