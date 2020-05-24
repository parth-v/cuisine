import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';

const BusinessDisplayScreen = ({ navigation }) => {
	const [business, setBusiness] = useState(null);
	const id = navigation.getParam('id');

	const getBusiness = async (id) => {
		const response = await yelp.get(`/${id}`);
		setBusiness(response.data);
	};

	useEffect(() => {
		getBusiness(id);
	}, []);

	if(!business) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.name} >{business.name}</Text>
			<FlatList
				data={business.photos}
				showsVerticalScrollIndicator={false}
				keyExtractor={(pic) => pic}
				renderItem={({ item }) => {
					return <Image style={styles.image} source={{ uri: item }} />;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1 
	},
	name:{
		fontWeight: 'bold',
		fontSize: 18,
		margin: 5
	},
	image: {
		height:200,
		width:300,
		margin: 5,
		borderRadius: 5	
	}
});

export default BusinessDisplayScreen;