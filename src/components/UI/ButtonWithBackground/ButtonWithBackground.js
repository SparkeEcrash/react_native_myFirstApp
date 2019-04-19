import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Text, View, StyleSheet, Platform} from 'react-native';

const buttonWithBackground = props => {
	const content = (
			<View style={[styles.button, {backgroundColor: props.color}]}>
				<Text style={[styles.text]}>{props.children}</Text>
			</View>
	);
	
	return (
		Platform.OS === 'android' ?
		<TouchableNativeFeedback onPress={props.onPress}>
			{content}
		</TouchableNativeFeedback>
		:
		<TouchableOpacity onPress={props.onPress}>
			{content}
		</TouchableOpacity>
	)
};

const styles = StyleSheet.create({
	text: {
		color: "black"
	},
	button: {
		padding: 10,
		margin: 5,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "black"
	}
});

export default buttonWithBackground;