import React, {useState} from 'react';
import {
  PermissionsAndroid,
  Alert,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  Container,
  TypeTitle,
  TypeImage,
  ContentContainer,
  TitleContainer,
  LocationButton,
} from "./styles";

import calendar from "../../../assets/calendar.png";
import people from "../../../assets/people.png";

import { Header } from 'react-native-elements';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PaHomeMenu = ({navigation}) => {
  const [position, setPosition] = useState({
    latitude: -20,
    longitude: -45,
    latitudeDelta: 0.4,
    longitudeDelta: 0.4,
  });

  const request_location_runtime_permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão de Localização',
          message: 'A aplicação precisa da permissão de localização.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          pos => {
            setPosition({
              ...position,
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
          },
          error => {
            console.log(error);
            Alert.alert('Houve um erro ao pegar a latitude e longitude.');
          },
        );
      } else {
        Alert.alert('Permissão de localização não concedida');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        leftComponent={<Icon name="menu" size={30} style={{justifyContent: 'center', bottom: 10, color: '#fff'}} onPress={() => navigation.openDrawer()} />} 
        centerComponent={{ text: 'MENU', style: { color: '#fff', fontSize: 25, bottom: 10  } }}
        containerStyle={{height: 50, alignItems: 'center', backgroundColor: '#28b45d'}}
      />
      <MapView
        style={styles.map}
        region={position}
        onPress={e =>
          setPosition({
            ...position,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          })
        }>
        <Marker
          coordinate={position}
          title={'Marcador'}
          description={'Testando o marcador no mapa'}
        />
      </MapView>
      <LocationButton
        onPress={() => {
          request_location_runtime_permission();
        }}>
        <Icon name="my-location" color={'#fff'} size={30} />
      </LocationButton>
        <Container>
          <TitleContainer>
            <TypeTitle>Escolha a opção desejada:</TypeTitle>
          </TitleContainer>
          <ContentContainer>
            <TouchableOpacity>
              <TypeImage source={calendar} />
            </TouchableOpacity>
            <TypeTitle>Solicitação</TypeTitle>
            <TypeTitle>de Agendamentos</TypeTitle>
          </ContentContainer>     
          <ContentContainer>
            <TouchableOpacity>
              <TypeImage source={people} />
            </TouchableOpacity>
            <TypeTitle>Solicitação</TypeTitle>
            <TypeTitle>de Pedidos</TypeTitle>
          </ContentContainer>      
        </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '100%',
    width: '100%',
  }
});

export default PaHomeMenu;