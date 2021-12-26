import React from 'react';
import { Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Montserrat_500Medium,
	Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import styled from 'styled-components';

import Main from '../../styles';
import Glass from '../../../components/Glass/Glass';
import globals from '../../../globals';
import logo from '../../../../assets/icon.png';

const Title = styled.Text`
	font-size: 20px;
	font-family: Montserrat_700Bold;
`;

const Description = styled.Text`
	font-size: 10px;
	font-family: Montserrat_500Medium;
	text-align: center;
`;

const First = () => {
	let [ fontsLoaded, error ] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
	})
	if(!fontsLoaded) return <AppLoading />

	return (
		<Main>
			<Glass>
				<Image 
					source={logo}
					style={{height: 100, width: 100}}
				/>
				<Title>Doousenger</Title>
				<Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur id nihil, voluptas assumenda libero, numquam accusamus veniam suscipit eius quas quae nesciunt quasi fuga veritatis culpa eos quaerat nobis quia
				</Description>
			</Glass>
		</Main>
	)
}

export default First;

/* position: relative;
	width: 280px;
	height: 400px;
	margin: 30px;
	box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
	border-radius: 15px;
	background: rgba(255, 255, 255, 0.1);
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	border-left: 1px solid rgba(255, 255, 255, 0.5);
	backdrop-filter: blur(5px); */

/*
position: absolute;
width: 396px;
height: 851px;
left: 16px;
top: 37px;
*/