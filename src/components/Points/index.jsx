import React from 'react';
import styled from 'styled-components/native';
import { globals } from '../../globals';

const EnableCircle = styled.View`
	height: 8px;
	width: 8px;
	border-radius: 50px;
	background-color: ${globals.colors.details};
	margin: 5px;
`;

const DisableCircle = styled.View`
	height: 8px;
	width: 8px;
	border-radius: 50px;
	background-color: ${globals.colors.disable};
	margin: 5px;
`;

const Wrapper = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	margin: 15px;
`;

export default Points = () => (
	<Wrapper>
		<EnableCircle />
		<DisableCircle />
		<DisableCircle />
		<DisableCircle />
	</Wrapper>
);
