import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image, 
  StyleSheet
} from 'react-native';

import logo from '../../../assets/logo.png';
import { Header } from 'react-native-elements';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText, 
  Label,
} from './styles';

export default function PaResetPassword({ navigation }) {

  function handleSubmit() {
    
  }
    return ( 
        <Container>
          <Header
            centerComponent={{ text: 'ESQUECI A SENHA', style: { color: '#fff', fontSize: 25, marginBottom: 20 } }}
            containerStyle={{width: 400, backgroundColor: "#28b45d", height: 60}}
          />
          <Image style={{marginTop: 10}} source ={logo} />
          <Text style={{fontSize: 32, marginTop: 15, color: '#28b45d'}}>E-mail ou Celular</Text>
          <Form>
            <FormInput 
              icon = "mail-outline"
              keyboardType = "email-address"
              autoCorrect={false}
              autoCapitalize = "none"
              placeholder = "Digite seu e-mail" 
            />
            <SubmitButton onPress ={handleSubmit}> Avançar </SubmitButton>
          </Form>
          <SignLink onPress ={() => navigation.navigate('ForgotPassword')} >
            <SignLinkText><Label>Não tem conta?</Label> Cadastre-se </SignLinkText> 
          </SignLink>
          <SignLink onPress ={() => navigation.navigate('ForgotPassword')} >
            <SignLinkText><Label>Problemas?</Label> Ajuda </SignLinkText> 
          </SignLink>
        </Container>
    );
  }

