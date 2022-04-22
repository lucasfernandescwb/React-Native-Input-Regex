import React from "react";

import {
  Container,
  TextInput,
  Touchable,
  Icon,
  View,
  Text,
  Content,
  InputContainer
} from "./styles";

import IconCheck from "../../images/icon-check.png";
import IconNo from "../../images/icon-close.png";
import IconEye from "../../images/icon-eye.png";
import IconClosedEye from "../../images/icon-closed-eye-.png";

const Input = () => {
  const [validateInput, setValidateInput] = React.useState({
    case: false,
    number: false,
    length: false,
  });

  const secureText = (password: string) => {
    const regexUppercase = new RegExp(/^(?=.*[A-Z]).+$/);
    const regexLowercase = new RegExp(/^(?=.*[a-z]).+$/);
    const regexNumber = new RegExp(/^(?=.*[0-9]).+$/);
    const length = password.length >= 6;

    setValidateInput({
      case: regexUppercase.test(password) && regexLowercase.test(password),
      number: regexNumber.test(password),
      length,
    });
  };

  const [passwordVisible, setPasswordVisible] = React.useState(true);

  return (
    <Container>
      <InputContainer>
        <TextInput
          placeholder="Senha"
          secureTextEntry={passwordVisible}
          onChangeText={(password) => {
            secureText(password);
          }}
          onEndEditing={() => console.log('Chamada de API')}
        />
        <Touchable onPress={() => setPasswordVisible(!passwordVisible)}>
          {passwordVisible ? (
            <Icon source={IconEye} />
          ) : (
            <Icon source={IconClosedEye} />
          )}
        </Touchable>
      </InputContainer>

      <Content>

        <View>
          <Icon source={validateInput.length ? IconCheck : IconNo} />
          <Text>6 caracteres</Text>
        </View>

        <View>
          <Icon source={validateInput.number ? IconCheck : IconNo} />
          <Text>Números</Text>
        </View>

        <View>
          <Icon source={validateInput.case ? IconCheck : IconNo} />
          <Text>Letra maiúscula e letra minúscula</Text>
        </View>

      </Content>

    </Container>
  );
};

export default Input;
