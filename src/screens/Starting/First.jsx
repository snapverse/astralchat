import React from 'react';
import {
	useFonts,
	Montserrat_500Medium,
	Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import styled from 'styled-components';

import Main from '../styles';
import Glass from './Glass/Glass';
import logo from '../../../assets/icon.png';
import Points from './Points/Points';

const Title = styled.Text`
	font-size: 20px;
	font-family: Montserrat_700Bold;
`;

const Description = styled.Text`
	font-size: 10px;
	font-family: Montserrat_500Medium;
	text-align: center;
`;

const Logo = styled.Image`
	height: 100px;
	width: 100px;
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
				<Logo source={logo} />
				<Title>Doousenger</Title>
				<Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur id nihil, voluptas assumenda libero, numquam accusamus veniam suscipit eius quas quae nesciunt quasi fuga veritatis culpa eos quaerat nobis quia
				</Description>
				<Points Points/>
			</Glass>
		</Main>
	)
}

export default First;