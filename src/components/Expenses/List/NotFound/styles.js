import React from "react";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${(props) => props.theme.colors.listContainer};
`;

export const Text = styled.Text`
  padding: 10px 30px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
`;

export const Icon = styled((props) => <FontAwesome5 {...props} />)`
  color: ${(props) => props.theme.colors.text};
  font-size: 50px;
`;
