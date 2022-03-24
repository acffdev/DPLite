import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 25px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
`;
