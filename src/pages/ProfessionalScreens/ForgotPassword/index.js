import React, { useState, useRef } from 'react';
import {
  Text,
} from 'react-native';

import { Header } from 'react-native-elements';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText, 
  Label,
  ContainerLink,
} from './styles';

export default function PrForgotPassword({ navigation }) {

  function handleSubmit() {
    
  }

  return ( 
    <>
      <Header
        centerComponent={{ text: 'ESQUECEU SUA SENHA', style: { color: '#fff', fontSize: 25, bottom: 10, right: 60  } }}
        containerStyle={{width: 500, height: 50, alignItems: 'center', backgroundColor: '#28b45d'}}
      />
      <Container>
          <Text style={{fontSize: 32, color: '#28b45d'}}>Informe seu contato</Text>
          <Text style={{fontSize: 32, color: '#28b45d'}}>de recuperação</Text>
          <Form>
            <FormInput 
              icon = "mail-outline"
              keyboardType = "email-address"
              autoCorrect={false}
              autoCapitalize = "none"
              placeholder = "E-mail" 
            />
            <SubmitButton onPress ={handleSubmit}> Avançar </SubmitButton>
          </Form>
          <ContainerLink>
            <SignLink onPress ={() => navigation.navigate('PrSignUp')} >
              <SignLinkText><Label>Não tem conta?</Label> Cadastre-se </SignLinkText> 
            </SignLink>
            <SignLink onPress ={() => navigation.navigate('PaHelp')} >
              <SignLinkText><Label>Problemas?</Label> Ajuda </SignLinkText> 
            </SignLink>
          </ContainerLink>
      </Container>
    </>
  );
}

