import React from 'react'
import { Image, Text } from 'react-native'

import Main from '../../styles';
import Glass from '../../../components/Glass/Glass';

import icon from '../../../../assets/icon.png';


export default namespace = {
	saludar: function() {}

}

const First = () => {
	return (
		<Main>
			<Glass>
				<Image source={require(icon)} />
				<Text>Doousenger</Text>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur id nihil, voluptas assumenda libero, numquam accusamus veniam suscipit eius quas quae nesciunt quasi fuga veritatis culpa eos quaerat nobis quia
				</Text>
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