import React, { useState, useRef } from 'react';
import {
  Image,
  ActivityIndicator,
  AsyncStorage,
  Text,
} from 'react-native';

import { StackActions, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import { ButtonGroup } from 'react-native-elements';
import api from '../../services/api';

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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function saveUser(user) {
    await AsyncStorage.setItem('@MedfyApp:userToken', JSON.stringify(user))
  }

  async function signIn() {
    if (email.length === 0) return

    setLoading(true)

    try {
      const credentials = {
        email: email,
        password: password
      }

      const response = await api.post('/sessions', credentials)

      const user = response.data

      await saveUser(user)

      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routename: selected === 0 ? 'PaHomeMenu' : 'PrHomeMenu' })],
      })

      setLoading(false)

      PropTypes.navigation.dispatch(resetAction)
    } catch (err) {
      console.log(err)

      setLoading(false)
      setErrorMessage('Usuário não existe')
    }
  }
  function handleSubmit() {
    
  }

  return ( 
    <Container>
      <Image source ={logo} />
      <ButtonGroup
        selectedIndex={selected}
        onPress={setSelected}
        buttons={['Paciente', 'Profissional']}
        containerStyle={{marginTop: 20, width: 420}}
        textStyle={{fontSize:19}}
        selectedButtonStyle={{backgroundColor:"#28b45d"}}
        disabledStyle={{backgroundColor:"#28b45d"}} />
      <Form>
      {!!errorMessage && <Error>{errorMessage}</Error>}
        <FormInput 
          icon = "mail-outline"
          keyboardType = "email-address"
          autoCorrect={false}
          autoCapitalize = "none"
          placeholder = "Digite seu e-mail" 
          value={email}
          onChangeText={email => setEmail(email)}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <FormInput 
          icon = "lock-outline"
          secureTextEntry
          placeholder = "Digite sua senha"
          value={password}
          onChangeText={password => setPassword(password)}
          ref={passwordRef}
          returnKeyType="send"
          /* onSubmitEditing={handleSubmit} */
        />
        <ForgotPasswordLink onPress={() => navigation.navigate(selected === 0 ? 'PaForgotPassword' : 'PrForgotPassword')}>
          <ForgotPasswordText> Esqueceu sua senha? </ForgotPasswordText> 
        </ForgotPasswordLink>
        <SubmitButton onPress={signIn}>
        {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text>Entrar</Text>
          )}
        </SubmitButton>
      </Form>
      <SignUpLink onPress={() => navigation.navigate(selected === 0 ? 'PaSignUp' : 'PrSignUp')}>
        <SignUpLinkText> Cadastre-se </SignUpLinkText> 
      </SignUpLink>
    </Container>
  );
}

SignIn.navigationOptions = () => {
  return {
    header: null,
  }
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
}