import React from "react";
import styled from "styled-components/native";

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.text,
}))`
  flex: 1;
  margin-right: 10px;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  color: ${(props) => props.theme.colors.text};
`;
