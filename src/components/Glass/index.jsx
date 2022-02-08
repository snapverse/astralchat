import React from 'react';
import { StyleSheet, View } from 'react-native';

export default Glass = () => <View styles={styles.glass}></View>

const styles = StyleSheet.create({
	glass: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#4d4d4d',
		width: '90%',
		height: '90%',
		borderRadius: 16,
	}
})

/* const styles = StyleSheet.create({
	gradient: {
		height: "100%", 
		width: "100%", 
		borderRadius: 16,
	}		
}) */

/*<LinearGradient
	colors={['rgba(255, 255, 255, 0.1)','rgba(255, 255, 255, 0.1)']}
	style={styles.gradient}
/>*/

/*
	box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
	border-radius: 15px;
	background: rgba(255, 255, 255, 0.1);
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	border-left: 1px solid rgba(255, 255, 255, 0.5);
	backdrop-filter: blur(5px); 
	*/
