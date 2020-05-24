import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const BusinessList = ({ title, businesses }) => {
	return (
		<View>
			<Text style = { styles.titleStyle }>{title}</Text>
			<Text>
				No of business: {businesses.length}
			</Text>
			<FlatList
				horizontal
				keyExtractor = {business => business.id}
				data = { businesses }
				renderItem = { ({ item }) => {
					return <Text>{ item.name }</Text>;
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});

export default BusinessList;
