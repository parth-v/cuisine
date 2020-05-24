import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const BusinessDetail = ({ business }) => {
	return (
		<View style={styles.parentView}>
			<Image style={styles.image} source={{ uri: business.image_url }} />
			<Text style={styles.name}>{business.name}</Text>
			<Text>
				{business.rating} Stars, {business.review_count} Reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	parentView: {
		marginLeft: 15
	},
	image: {
		width: 250,
		height: 120,
		borderRadius: 5,
		marginBottom: 15
	},
	name: {
		fontWeight: 'bold'
	}
});

export default BusinessDetail;