import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';
import { AntDesign } from '@expo/vector-icons';

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
			<Text style={styles.bold} >
				{business.rating} <AntDesign name="staro" size={20} color="black" />  & Total Reviews: {business.review_count}</Text>
			<Text style={styles.details} ><Text style={styles.bold}>Address:</Text> {business.location.display_address}</Text>
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
		backgroundColor: '#efd3d8',
		flex: 1 
	},
	name:{
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 24,
		margin: 5
	},
	bold:{
		fontWeight: 'bold'
	},
	details:{
		fontWeight: '200',
		textAlign: 'center',
		fontSize: 15,
		margin: 3
	},
	image: {
		height: 180,
		width: 270,
		margin: 8,
		borderRadius: 5
	}
});

export default BusinessDisplayScreen;