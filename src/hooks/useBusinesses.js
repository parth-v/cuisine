import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [businesses, setBusinesses] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async (searchQuery) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchQuery,
					location: 'san jose'
				} 
			});
			setBusinesses(response.data.businesses);
		} catch (err) {
			setErrorMessage('Sorry, unable to fetch results!!');
		}
	}

	useEffect(() => {
		searchApi('pasta');
	}, []);

	return [ searchApi, errorMessage, businesses ];	
};