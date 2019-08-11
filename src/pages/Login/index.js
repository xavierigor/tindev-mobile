import React, { useState, useEffect } from "react";
import { Image, AsyncStorage } from "react-native";

import { Container, Input, Button, ButtonText } from "./styles";

import logo from "../../assets/logo.png";

import api from "../../services/api";

export default function Login({ navigation }) {
  const [user, setUser] = useState("");

  // useEffect executa uma função toda vez que
  // seu segundo parâmetro mudar de valor, caso
  // não haja segundo parâmetro, a função só é
  // executada uma única vez.
  useEffect(() => {
    AsyncStorage.getItem("user").then(user => {
      if (user) {
        navigation.navigate("Main", { user });
      }
    });
  }, []);

  async function handleLogin() {
    const response = await api.post("/devs", { username: user });

    const { _id } = response.data;

    await AsyncStorage.setItem("user", _id);

    navigation.navigate("Main", { user: _id });
  }

  return (
    <Container behavior="padding" enabled>
      <Image source={logo} />
      <Input
        placeholder="Digite seu usuário no Github"
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
        value={user}
        onChangeText={setUser}
      />
      <Button onPress={handleLogin} activeOpacity={0.8}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
}
