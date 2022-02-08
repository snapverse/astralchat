import React from 'react';
import styled from 'styled-components/native';
import { globals } from '../../globals';
import { Text } from 'react-native';

const Wrapper = styled.TouchableOpacity`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	width: 50px;
	background-color: ${globals.colors.details};
	border-radius: ${50/2}px
`;

export default ButtonNext = () => {
	const handleArrow = () => {
		alert('Hello boy!')
	}
	return (
		<Wrapper onPress={handleArrow}>
			<Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold'}}>{'>'}</Text>
		</Wrapper>
	);
};