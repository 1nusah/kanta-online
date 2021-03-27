import { useState, useEffect } from 'react';
import axios from 'axios';

const REACT_APP_RAPID_API_KEY =
	'908eaa4eadmsh94afb70c1999659p1921b3jsn8b74ead96ca2';

const options = {
	method: 'GET',
	url: 'https://rapidapi.p.rapidapi.com/products/v2/list',
	params: {
		offset: '0',
		categoryId: '4209',
		limit: '12',
		store: 'US',
		country: 'US',
		currency: 'USD',
		sort: 'freshness',
		lang: 'en-US',
		sizeSchema: 'US',
	},
	headers: {
		'x-rapidapi-host': 'asos2.p.rapidapi.com',
		'x-rapidapi-key': REACT_APP_RAPID_API_KEY,
	},
};

const useRequest = (query) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const payload = await axios.request({
					...options,
					params: {
						...options.params,
						q: query,
					},
				});
				setData(payload.data);
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);

	return data;
};
export default useRequest;
