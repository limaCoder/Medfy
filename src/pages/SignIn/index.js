import React, { useState, useRef } from 'react';
import {
  Image
} from 'react-native';

import logo from '../../assets/logo.png';
import { ButtonGroup } from 'react-native-elements';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  ForgotPasswordLink,
  ForgotPasswordText,
  SignUpLink,
  SignUpLinkText,
} from './styles';

export default function SignIn({ navigation }) {

  const [selected, setSelected] = useState(0);
  const passwordRef = useRef(); 
  function handleSubmit() {
    
  }

  return ( 
    <Container>
      <Image source ={logo} />
      <ButtonGroup
        selectedIndex={selected}
        onPress={setSelected}
        buttons={['Paciente', 'Profissional']}
        containerStyle={{marginTop: 20, width: 400}}
        textStyle={{fontSize:19}}
        selectedButtonStyle={{backgroundColor:"#28b45d"}}
        disabledStyle={{backgroundColor:"#28b45d"}} />
      <Form>
        <FormInput 
          icon = "mail-outline"
          keyboardType = "email-address"
          autoCorrect={false}
          autoCapitalize = "none"
          placeholder = "Digite seu e-mail" 
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <FormInput 
          icon = "lock-outline"
          secureTextEntry
          placeholder = "Digite sua senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <ForgotPasswordLink onPress={() => navigation.navigate(selected === 0 ? 'PaForgotPassword' : 'PrForgotPassword')}>
          <ForgotPasswordText> Esqueceu sua senha? </ForgotPasswordText> 
        </ForgotPasswordLink>
        <SubmitButton onPress={() => navigation.navigate(selected === 0 ? 'PaHomeMenu' : 'PrHomeMenu')}> Entrar </SubmitButton>
      </Form>
      <SignUpLink onPress={() => navigation.navigate(selected === 0 ? 'PaSignUp' : 'PrSignUp')}>
        <SignUpLinkText> Cadastre-se </SignUpLinkText> 
      </SignUpLink>
    </Container>
  );
}