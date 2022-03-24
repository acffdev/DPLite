import React from "react";
import styled from "styled-components/native";
import { TextMask } from "react-native-masked-text";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 15px;
  height: 60px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.listItemContainer};
`;

export const Wrapper = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.fonts.size.small};
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
`;

export const Date = styled.Text`
  font-size: ${(props) => props.theme.fonts.size.tiny};
  color: ${(props) => props.theme.colors.primary}80;
`;

export const Price = styled(TextMask)`
  font-size: ${(props) => props.theme.fonts.size.small};
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
`;
