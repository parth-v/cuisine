import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';

const SearchScreen = () => {
	const [query, setQuery] = useState('');
	const [ searchApi, errorMessage, businesses ] = useBusinesses();

	return (
		<View>
			<SearchBar 
				query = {query} 
				onQueryChange = {setQuery} 
				onQuerySubmit = { () => searchApi(query) }
			/>
			{
				errorMessage ? <Text>{errorMessage}</Text> : null
			}
			<Text>We have found {businesses.length} businesses!</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
