import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { CssTextField } from '../input/index';
import axios from 'axios';
import './search.css';
const Search = () => {
	const [searchItem, setsearchItem] = useState('');

	const handleSearchText = (event) => {
		setsearchItem(event.target.value);
		console.log(searchItem);
	};
	const handleSearch = () => {
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
				q: searchItem,
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
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	return (
		<Grid
			container
			className="searchContainer"
			alignItems="center"
			justify="center"
		>
			<Grid
				className="searchBox"
				style={{ paddingTop: '5%' }}
				item
				xs={12}
				md={12}
				lg={12}
				sm={12}
			>
				<CssTextField
					style={{ width: '50%' }}
					autoFocus
					onChange={handleSearchText}
				/>
				<Button>
					<SearchIcon
						style={{
							color: '#adadad',
							borderBottomColor: '#adadad',
						}}
						onClick={handleSearch}
					/>
				</Button>
			</Grid>
		</Grid>
	);
};

export default Search;
