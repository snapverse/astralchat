import React from 'react';
import styled from 'styled-components/native';
// import Glass from '../../components/Glass'
import Points from '../../components/Points';
import logo from '../../../assets/icon.png';
import title from '../../../assets/titles/titletwo.png'
import { View, StyleSheet } from 'react-native'
import ButtonNext from '../../components/ButtonNext';

const Description = styled.Text`
width: 280px;
	font-size: 16px;
	font-family: Montserrat_500Medium;
	text-align: center;
	color: #fff;
`;

const Logo = styled.Image`
	height: 125px;
	width: 125px;
`;

const Title = styled.Image`
	width: 250px;
	height: 40px;
	resize-mode: contain;
`;

export default Home = () => {
	return (
		<View style={styles.glass}>
			<Logo source={logo} />
			<Title source={title} />
			<Description>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies vitae
				non tempor.
			</Description>
			<Points />
			<ButtonNext />
		</View>
	);
};

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