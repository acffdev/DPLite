import React from "react";
import styled from "styled-components/native";
import { TextMask } from "react-native-masked-text";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.listContainer};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const List = styled.FlatList`
  margin: 10px;
  margin-bottom: 0;
`;

export const Total = styled.View`
  position: absolute;
  bottom: 10px;
  right: 10px;
  border: 4px white;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.primary};
  elevation: 5;
`;

export const Text = styled(TextMask)`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primaryText};
`;
