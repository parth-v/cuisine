import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
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
		<View style = {styles.container}>
			<SearchBar 
				query = {query} 
				onQueryChange = {setQuery} 
				onQuerySubmit = { () => searchApi(query) }
			/>
			{
				errorMessage ? <Text>{errorMessage}</Text> : null
			}
			<ScrollView>
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
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: '#efd3d8',
	}
});

export default SearchScreen;
