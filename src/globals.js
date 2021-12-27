import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from "react-native";

export default globals = {
 colors: {
  primary: "#202020",
  secondary: "#262626",
  details: "#20E7A4",
  disable: "#F2F2F2",
  glass: "#CCCCCC",
},
 padding: {
  ps: "5px",
},
 margin: {
   mb: "16px",
  },
 borders: {
  bs: "6px",
  bg: "16px",
 },
 fonts: {
   poppins: {
    thin: "Poppins_100Thin",
    light: "Poppins_300Light",
    medium: "Poppins_500Medium",
    italic: "Poppins_400Regular_Italic",
    bold: "Poppins_700Bold",
   },
   montserrat: {
    thin: "Montserrat_100Thin",
    light: "Montserrat_300Light",
    medium: "Montserrat_500Medium",
    italic: "Montserrat_500Medium_Italic",
    bold: "Montserrat_700Bold",
   },
 }
}

const STATUSBAR_HEIGHT = 15;
export const CustomStatusBar = ({backgroundColor}) => (
  <View style={{ backgroundColor, marginBottom: STATUSBAR_HEIGHT}}>
    <SafeAreaView>
      <StatusBar 
        translucent 
        backgroundColor={backgroundColor}
        marginBottom={STATUSBAR_HEIGHT}
      />
    </SafeAreaView>
  </View>
);

// linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 118.39%, rgba(255, 255, 255, 0) 218.39%)",
// const STATUSBAR_HEIGHT = StatusBar.currentHeight;
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