import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
	const [query, setQuery] = useState('');
	const [businesses, setBusinesses] = useState([]);

	const searchApi = async () => {
		const response = await yelp.get('/search', {
			params: {
				limit: 50,
				term: query,
				location: 'san jose'
			} 
		});
		setBusinesses(response.data.businesses);
	}
	return (
		<View>
			<SearchBar 
				query = {query} 
				onQueryChange = {setQuery} 
				onQuerySubmit = {searchApi}
			/>
			<Text>Search Screen</Text>
			<Text>We have found {businesses.length} businesses!</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
