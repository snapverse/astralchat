import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { StyleSheet } from "react-native";

import globals from '../../../globals';

const Glass = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${globals.borders.bg};
	height: 90%;
	width: 90%;

`;

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

const Glassed = () => {
	return (
		<Glass>
		</Glass>
	)
}

export default Glassed

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