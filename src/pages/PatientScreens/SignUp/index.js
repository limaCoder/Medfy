import React, { useState, useRef } from 'react';
import {
  ScrollView,
} from 'react-native';

import { Avatar, Header } from 'react-native-elements';

import RNPickerSelect from 'react-native-picker-select';
/* import ImagePicker from 'react-native-image-picker'; */
import Icon from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  DropdownView,
} from './styles';

export default function PaSignUp({ navigation }) {

  /* const [avatar, setAvatar] = useState(0);

  const imagePickerOptions = {
    title: 'Selecione uma imagem'
  };

  function imagePickerCallback(data) {
    if (data.didCancel) {
      return;
    }

    if (data.error) {
      return;
    }

    if (data.customButton) {
      return;
    }

    if (!data.uri) {
      return;
    }
    setAvatar(data);
  }

  async function uploadImage() {
    const data = new FormData();

    data.append('avatar', {
      fileName: avatar.fileName,
      uri: avatar.uri,
      type: avatar.type,
    });

    await Axios.post('http://localhost:3333/files', data);
  }

  const cpfRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const passwordRef = useRef();
  const passwordAgainRef = useRef();

  function handleSubmit() {
    
  } */

  return (
    <>
      <Header
        centerComponent={{ text: 'CADASTRO', style: { color: '#fff', fontSize: 25, bottom: 10  } }}
        containerStyle={{height: 50, alignItems: 'center', backgroundColor: '#28b45d'}}
      />
      <Container>
        <ScrollView>
          <Avatar
            size="xlarge"
            rounded
            /* source={{ uri: avatar ? avatar.uri : 'https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png',}} */
            activeOpacity={0.7}
            showEditButton 
            /* onPress={() => ImagePicker.showImagePicker(imagePickerOptions, imagePickerCallback)} */
            containerStyle={{flex: 1, alignSelf: 'center', marginTop: 10}}
          />
          <Form>
            <FormInput 
              icon = "person"
              autoCorrect={false}
              placeholder = "Nome Completo"
              returnKeyType="next"
              onSubmitEditing={() => cpfRef.current.focus()} 
            />
            <DropdownView>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                Icon={() => <Icon name="genderless" size={20} style={{right: 245, color: '#28b45d', top: 10}} />}
                placeholder={{
                  label: 'Selecione seu Sexo',
                  value: null,
                  color: '#28b45d',
                }}
                style={{inputAndroid:{
                  fontSize: 20,
                  justifyContent: 'flex-start',
                  paddingVertical: 8,
                  paddingHorizontal: 48,
                  color: '#000',
                }}}
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Masculino', value: 'masc' },
                    { label: 'Feminino', value: 'fem' },
                ]}
              />
            </DropdownView>
            <FormInput 
              icon = "person-pin"
              autoCorrect={false}
              keyboardType= "numeric"
              placeholder = "CPF" 
              ref={cpfRef}
              returnKeyType="next"
              onSubmitEditing={() => phoneRef.current.focus()}
            />
            <FormInput 
              icon = "phone"
              autoCorrect={false}
              keyboardType= "numeric"
              placeholder = "Telefone Celular"
              ref={phoneRef}
              returnKeyType="next" 
              onSubmitEditing={() => emailRef.current.focus()}
            />
            <FormInput 
              icon = "mail-outline"
              keyboardType = "email-address"
              autoCorrect={false}
              autoCapitalize = "none"
              placeholder = "Digite seu e-mail" 
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => addressRef.current.focus()}
            />
            <FormInput 
              icon = "place"
              autoCorrect={false}
              keyboardType= "numeric"
              placeholder = "CEP" 
              ref={addressRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
            />
            <FormInput 
              icon = "lock-outline"
              secureTextEntry
              placeholder = "Digite sua senha" 
              ref={passwordRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordAgainRef.current.focus()}
            />
            <FormInput 
              icon = "lock-outline"
              secureTextEntry
              placeholder = "Confirme sua senha" 
              ref={passwordAgainRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
            />
            <SubmitButton 
              onPress ={() => navigation.navigate('PaTermsAndConditions')}> Avançar 
            </SubmitButton>
          </Form>
        </ScrollView>
      </Container>
    </>
  );
}

