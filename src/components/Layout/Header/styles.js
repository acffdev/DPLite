import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  padding: 20px 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text}};
`;

export const Span = styled.Text`
  color: ${(props) => props.theme.colors.primary};
`;

export const TouchableOpacity = styled.TouchableOpacity``;

export const Icon = styled((props) => <Ionicons {...props} />)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 25px;
`;
