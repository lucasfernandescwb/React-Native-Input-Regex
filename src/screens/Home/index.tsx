import React from "react";
import {
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Input from "../../components/Input";

import { Container, Text, ViewButton } from "./styles";

const Home = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Text>Sua senha:</Text>

        <Input />
        <ViewButton>
          <Button title="Entrar" onPress={() => alert('Botão Pressionado!')} />
        </ViewButton>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Home;
