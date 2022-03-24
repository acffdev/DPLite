import React from "react";
import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export const Overlay = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
  background: #dddddd90;
`;

export const CloseModalWrapper = styled.View`
  align-items: flex-end;
`;
export const CloseModalText = styled.Text`
  color: ${(props) => props.theme.colors.primaryText};
`;
export const CloseModal = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  width: 40px;
  height: 40px;
  border-radius: 80px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Container = styled.View`
  margin-top: 25px;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  elevation: 2;
`;

export const Title = styled.Text`
  font-weight: bold;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.primary};
`;

export const Fieldset = styled.View`
  flex-direction: row;
`;

export const Input = styled(TextInputMask)`
  flex: 1;
  margin-right: 20px;
  padding: 5px 0;
  border-bottom-width: 1px;
  border-color: #ddd;
  color: ${(props) => props.theme.colors.text};
`;

export const Submit = styled.TouchableOpacity`
  align-items: center;
  margin-top: 15px;
  padding: 15px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.primary};
`;

export const SubmitText = styled.Text`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primaryText};
`;
