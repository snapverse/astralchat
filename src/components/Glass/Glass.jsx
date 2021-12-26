import styled from 'styled-components';
import globals from '../../globals';

const Glass = styled.View`
	display: flex;
	align-items: center;
 	justify-content: center;
	background-color: ${globals.colors.glass};
	border-radius: ${globals.borders.bg};
	height: 90%;
  width: 90%;
  padding: 30px;
`;

export default Glass