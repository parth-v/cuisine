import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import BusinessList from '../components/BusinessList';

const SearchScreen = () => {
	const [query, setQuery] = useState('');
	const [ searchApi, errorMessage, businesses ] = useBusinesses();

	const filterBusinessByPrice = (price) => {
		return businesses.filter( business => {
			return business.price === price;
		});
	};

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
			<Text>
				We have found {businesses.length} businesses!
			</Text>
			<BusinessList 
				title="Cheapest" 
				businesses = { filterBusinessByPrice('$')} 
			/> 
			<BusinessList 
				title="Cheap" 
				businesses = { filterBusinessByPrice('$$')} 
			/>
			<BusinessList 
				title="Expensive" 
				businesses = { filterBusinessByPrice('$$$')} 
			/>
			<BusinessList 
				title="Most Expensive" 
				businesses = { filterBusinessByPrice('$$$$')} 
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
