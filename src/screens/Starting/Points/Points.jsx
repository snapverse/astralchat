import React from "react";
import styled from "styled-components/native";

import globals from "../../../globals";

const EnableCircle = styled.View`
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background-color: ${globals.colors.details};
`;

const DisableCircle = styled.View`
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background-color: ${globals.colors.disable};
`;

const Wrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Points = () => {
  return (
    <Wrapper>
      <EnableCircle />
      <DisableCircle />
      <DisableCircle />
      <DisableCircle />
    </Wrapper>
  )
}

export default Points;
