import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import BusinessDetail from './BusinessDetail';
import { withNavigation } from 'react-navigation';

const BusinessList = ({ title, businesses, navigation }) => {
	if(!businesses.length){
		return null;
	}
	return (
		<View style={styles.parentView} >
			<Text style = { styles.titleStyle }>{title}</Text>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				keyExtractor = { business => business.id }
				data = { businesses }
				renderItem = { ({ item }) => {
					return (
						<TouchableOpacity 
							onPress = {() => navigation.navigate('BusinessDisplay', {id: item.id})}
						>
							<BusinessDetail business={ item } />
						</TouchableOpacity>
					);
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

export default withNavigation(BusinessList);
