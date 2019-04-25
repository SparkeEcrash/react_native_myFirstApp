import React, {Component} from 'react';
import { View,TextInput, Button, StyleSheet} from 'react-native';
import DefaultInput from '../UI/DefaultInput/DefaultInput';

const placeInput = props => (
	<DefaultInput placeholder="Place Name" value={props.placeName} valid={props.placeData.valid} value={props.placeData.value} touched={props.placeData.touched} onChangeText={props.onChangeText}/>
)

export default placeInput;