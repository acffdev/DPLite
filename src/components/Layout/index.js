import React from "react";
import Header from "./Header";
import { Container, Content, KeyboardAvoidingView } from "./styles";
import { ThemeProvider } from "styled-components";
import { colors, fonts } from "../../styles";
import { Platform } from "react-native";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={{ colors, fonts }}>
      <Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Header />
          <Content>{children}</Content>
        </KeyboardAvoidingView>
      </Container>
    </ThemeProvider>
  );
}
