import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';

// this is the banner component
// we have a list of buttons that should be displayed
// then we pass a prop of clothes, shoes, bag, etc
// so passed on the props that is passed
// then we render the array into the shit
// example is we render men as the classification props
// then next is we men=['View all','Casual','shirts','trouser','hoodies','more]
// use a .map to render this shit
// then finally when you click on the button then we add the button text to the search query

const ClothesBanner = ({ classification }) => {
	const menBanner = ['view all', 'casual', 'shirts', 'trousers', 'hoodies'];
	const shoeBanner = [
		'view all',
		'boots',
		'trainers',
		'slippers',
		'sliders & flip flops',
	];
	const bagsBanner = [
		'view all',
		'totes',
		'back pack',
		'draw strings',
		'flight bag',
	];
	let renderedBanner =
		classification === 'women'
			? menBanner
			: classification === 'men'
			? menBanner
			: classification === 'children'
			? menBanner
			: classification === 'bags'
			? bagsBanner
			: shoeBanner;

	console.log('the remdered banner is ', renderedBanner);
	return (
		<Grid container>
			<Grid item xs={12} md={12} sm={12} lg={12} className="men_banner">
				<Typography
					className="men_banner_brand"
					variant="h3"
					style={{ color: '#fff' }}
				>
					{classification}
				</Typography>
				{renderedBanner?.map((item) => (
					<Button key="item" className="men_banner_items">
						{item}
					</Button>
				))}
				{/* <Button className="men_banner_items">view all</Button>
				<Button className="men_banner_items">casual</Button>
				<Button className="men_banner_items">shirts</Button>
				<Button className="men_banner_items">trousers</Button>
				<Button className="men_banner_items">hoodies</Button>
				<Button className="men_banner_items">more</Button> */}
			</Grid>
		</Grid>
	);
};

export default ClothesBanner;
