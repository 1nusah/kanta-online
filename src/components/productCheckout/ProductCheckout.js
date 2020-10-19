import React from 'react';
import { Grid, Button } from '@material-ui/core';
import AL from '../../assets/images/alireza-esmaeeli-BGSZ1t80rpM-unsplash.jpg';
import './ProductCheckOut.css';
import Product1 from '../../assets/images/pexels-ashutosh-sonwani-1839564.jpg';
import Product2 from '../../assets/images/pexels-ro-han-1693420.jpg';
import Product3 from '../../assets/images/pexels-tnarg-2932748.jpg';
import RelatedProduct from '../../components/product/RelatedProduct';
const ProductCheckOut = () => {
	return (
		<Grid container className="productcheckout">
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<div className="productcheckout_details__">
					<h1>Haban Hoodie</h1>
					<div className="productcheckout_ratings">
						<span role="img" aria-label="rating">
							⭐⭐⭐⭐⭐
						</span>
						<small>95 reviews</small>
					</div>
					<div className="productcheckout_price">
						<h2>$95</h2>
					</div>
					<div className="productcheckout_description">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
							iure veritatis, enim, quisquam delectus sunt dolor laborum error
							necessitatibus facilis accusamus debitis doloribus vel ad veniam
							tempore qui possimus rem.Lorem ipsum dolor sit, amet consectetur
							adipisicing elit. Nostrum iure veritatis, enim, quisquam delectus
							sunt dolor laborum error necessitatibus facilis accusamus debitis
							doloribus vel ad veniam tempore qui possimus rem.
						</p>
					</div>
				</div>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<div className="productcheckout_button">
						<Button style={{ color: '#adadad' }}>Add to Cart</Button>
					</div>
				</Grid>
			</Grid>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<img src={AL} alt="product " width="100%" height="auto" />
			</Grid>
			<Grid container>
				<Grid
					style={{
						marginBottom: '10%',
					}}
				>
					<div style={{ backgroundColor: '#333', marginBottom: '5px' }}>
						<h5>PRODUCT DETAILS</h5>
					</div>
					<div style={{ backgroundColor: '#333' }}>
						<p style={{ wordSpacing: 2 }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
							minima animi voluptas ducimus reprehenderit beatae consectetur
							esse. Eaque doloremque omnis laborum quo dignissimos molestias hic
							recusandae ab, debitis, suscipit sit.
						</p>
					</div>
					<div style={{ backgroundColor: '#333', marginTop: '40px' }}>
						<h5
							style={{
								marginBottom: '10px',
							}}
						>
							SPECIFICATIONS
						</h5>
						<p>Color: Red, Yellow, Green, Blue</p>
						<p>Material: Cotton</p>
						<p>Neck: Round</p>
						<p>Sleeve Type: Short</p>
						<p>Closure: Slip on</p>
					</div>
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={12} md={12} sm={12} lg={12}>
					<h3>Related Products</h3>
				</Grid>
				<RelatedProduct image={Product1} name="Odo Hoodie" price="$150" />
				<RelatedProduct image={Product2} name="Levi's Hoodie" price="$150" />
				<RelatedProduct
					image={Product3}
					name="True Religion Hoodie"
					price="$150"
				/>
			</Grid>
		</Grid>
	);
};

export default ProductCheckOut;
