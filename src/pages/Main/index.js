import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image, AsyncStorage } from "react-native";

import logo from "../../assets/logo.png";
import dislike from "../../assets/dislike.png";
import like from "../../assets/like.png";

import api from "../../services/api";

import {
  Container,
  Logo,
  CardsContainer,
  Card,
  Avatar,
  Footer,
  Name,
  Bio,
  ButtonsContainer,
  Button,
  Empty
} from "./styles";

export default function Main({ navigation }) {
  const id = navigation.getParam("user");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user: id
        }
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [id]);

  async function handleLogout() {
    await AsyncStorage.clear();

    navigation.navigate("Login");
  }

  async function handleLike() {
    // Pega o primeiro registro do array users e coloca na variável user
    // O restante do array é armazenado na variável rest
    const [user, ...rest] = users;

    await api.post(`/devs/${user._id}/likes`, null, {
      headers: {
        user: id
      }
    });

    // Seta o state users, filtrando o array e
    // deixando de fora o usuário que recebeu like
    setUsers(rest);
  }

  async function handleDislike() {
    const [user, ...rest] = users;

    await api.post(`/devs/${user._id}/dislikes`, null, {
      headers: {
        user: id
      }
    });

    setUsers(rest);
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleLogout} activeOpacity={0.7}>
        <Logo source={logo} />
      </TouchableOpacity>

      <CardsContainer>
        {users.length === 0 ? (
          <Empty>Nenhum usuário encontrado</Empty>
        ) : (
          users.map((user, index) => (
            <Card key={user._id} index={users.length - index}>
              <Avatar source={{ uri: user.avatar }} />
              <Footer>
                <Name>{user.name}</Name>
                {user.bio && <Bio>{user.bio}</Bio>}
              </Footer>
            </Card>
          ))
        )}
      </CardsContainer>

      {users.length > 0 && (
        <ButtonsContainer>
          <Button activeOpacity={0.7} onPress={handleDislike}>
            <Image source={dislike} />
          </Button>
          <Button activeOpacity={0.7} onPress={handleLike}>
            <Image source={like} />
          </Button>
        </ButtonsContainer>
      )}
    </Container>
  );
}
