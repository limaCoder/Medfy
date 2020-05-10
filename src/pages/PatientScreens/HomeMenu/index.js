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
  TypeDescription,
  TypeImage,
  DonationImage,
  ContentContainer,
  TitleContainer,
  LocationButton
} from "./styles";

import donation from "../../../assets/donation.png";
import elders from "../../../assets/elders.png";
import nurse from "../../../assets/nurse.png";

import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PaHomeMenu = ( {navigation, drawer} ) => {  

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
        centerComponent={{ text: 'MENU', style: { color: '#fff', fontSize: 25, bottom: 10}}}
        containerStyle={{height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#28b45d'}}
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
            <TypeTitle>Escolha o serviço desejado:</TypeTitle>
          </TitleContainer>
          <ContentContainer>
            <TouchableOpacity>
              <TypeImage source={nurse} />
            </TouchableOpacity>
            <TypeTitle>Enfermeiro</TypeTitle>
            <TypeDescription>R$110,00</TypeDescription>
            <TypeDescription>-</TypeDescription>
            <TypeDescription>R$150,00</TypeDescription>
          </ContentContainer>
          <ContentContainer>
            <TouchableOpacity>
              <DonationImage source={donation} />
            </TouchableOpacity>
            <TypeTitle>Doações</TypeTitle>
          </ContentContainer>      
          <ContentContainer>
            <TouchableOpacity>
              <TypeImage source={elders} />
            </TouchableOpacity>
            <TypeTitle>Cuidador</TypeTitle>
            <TypeTitle>de Idosos</TypeTitle>
            <TypeDescription>R$90,00</TypeDescription>
            <TypeDescription>-</TypeDescription>
            <TypeDescription>R$120,00</TypeDescription>
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