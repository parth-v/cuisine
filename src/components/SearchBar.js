import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ query, onQueryChange, onQuerySubmit }) => {
	return (
		<View style = {styles.parentViewStyle} >
			<TextInput 
				autoCorrect = {false}
				autoCapitalize = "none"
				style = {styles.inputStyle} 
				placeholder = "Search"	
				value = { query }
				onChangeText = {onQueryChange}
				onEndEditing = {onQuerySubmit}
			/>
			<FontAwesome style={styles.iconStyle} name="search" color="green" />
		</View>
	);
};

const styles = StyleSheet.create({
	parentViewStyle: {
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius: 5,
		borderWidth: 2,
		flexDirection: 'row',
		margin: 15,
		padding: 3
	},
	inputStyle:{
		flex:1,
		fontSize:18
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginLeft: 3
	}
});

export default SearchBar;