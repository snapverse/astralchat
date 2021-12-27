import React from "react";
import styled from "styled-components/native";

import globals from "../../../globals";

const Wrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background-color: ${globals.colors.details};
`;

const ButtonNext = () => {
  return (
    <Wrapper
      onPress={() => { console.log("hola mundo") }}
    >
      <Text>Next</Text>
    </Wrapper>
  )
}
export default ButtonNext;
