import React from "react";
import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export const Form = styled.KeyboardAvoidingView`
  padding: 10px;
`;

export const Fieldset = styled.View`
  flex-direction: row;
`;

export const InputTitle = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.text,
}))`
  flex: 2;
  margin-right: 10px;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  color: ${(props) => props.theme.colors.text};
`;

export const InputPrice = styled(TextInputMask).attrs((props) => ({
  placeholderTextColor: props.theme.colors.text,
}))`
  flex: 1;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  color: ${(props) => props.theme.colors.text};
`;

export const Submit = styled.TouchableOpacity`
  align-items: center;
  margin-top: 10px;
  padding: 15px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Text = styled.Text`
  font-size: ${(props) => props.theme.fonts.size.small};
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primaryText};
`;
