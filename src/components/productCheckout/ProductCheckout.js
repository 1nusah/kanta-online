import React from 'react';
import { Grid, Button } from '@material-ui/core';
import './ProductCheckOut.css';
import { useStateValue } from '../../StateProvider';

const ProductCheckOut = () => {
	const [{ selectedItem }, dispatch] = useStateValue();
	const addToBasket = () => {
		// add item to basket ..
		dispatch({
			type: 'ADD_TO_BASKET',
			item: selectedItem,
		});
	};
	return (
		<Grid container className="productcheckout__">
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<div className="productcheckout_details__">
					<h1>{selectedItem?.name}</h1>
					<div className="productcheckout_ratings">
						<span role="img" aria-label="rating">
							⭐⭐⭐⭐⭐
						</span>
						<small>95 reviews</small>
					</div>
					<div className="productcheckout_price">
						<h2>{selectedItem?.price}</h2>
					</div>
					<div className="productcheckout_description">
						<p>
							This produced from the finest of materials which are exclusive to
							our brand. We strongly believe in our customers feeling
							comfortable and easy when they wear our stuff. I don't know what
							to add since I'm really tired and thank you for your purchase
						</p>
					</div>
				</div>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<div className="productcheckout_button">
						<Button style={{ color: '#adadad' }} onClick={addToBasket}>
							Add to Cart
						</Button>
					</div>
				</Grid>
			</Grid>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<img
					src={'https://' + selectedItem?.image}
					alt="product "
					width="70%"
					height="auto"
				/>
			</Grid>
			<Grid container style={{ width: '85%' }}>
				<Grid
					style={{
						marginBottom: '5%',
						marginTop: '5%',
					}}
					item
					xs={12}
					sm={12}
					md={12}
					lg={12}
				>
					{/* <div style={{ marginBottom: '5px' }}></div> */}
					<Grid container>
						<Grid item xs={12} sm={12} lg={6} md={6}>
							<h5 style={{ fontSize: '18px' }}>PRODUCT DETAILS</h5>
							<p style={{ wordSpacing: 2 }}>
								Kanta-Online brings you exquisite, genuine items and this
								produvts is no exception. Ranging from the finest cotton to the
								finest stitch, all our decisions are how to design and make a
								product that stays with you for a millenium and can be passed
								down to generations
							</p>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={6}>
							<div style={{ paddingLeft: '17%' }}>
								<h5 style={{ fontSize: '18px' }}>SPECIFICATIONS</h5>
								<p>Color: Red, Yellow, Green, Blue</p>
								<p>Material: Cotton</p>
								<p>Neck: Round</p>
								<p>Sleeve Type: Short</p>
								<p>Closure: Slip on</p>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<Grid container style={{ width: '87%' }}>
				<Grid item xs={12} md={12} sm={12} lg={12}>
					<h3>Related Products</h3>
				</Grid>
				{/* <RelatedProducts categoryOfProducts="men" /> */}
			</Grid>
		</Grid>
	);
};

export default ProductCheckOut;
