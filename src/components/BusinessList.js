import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import BusinessDetail from './BusinessDetail';

const BusinessList = ({ title, businesses }) => {
	return (
		<View style={styles.parentView} >
			<Text style = { styles.titleStyle }>{title}</Text>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				keyExtractor = { business => business.id }
				data = { businesses }
				renderItem = { ({ item }) => {
					return <BusinessDetail business = { item } />;
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 15,
		marginBottom: 5
	},
	parentView: {
		marginBottom: 15
	}
});

export default BusinessList;
