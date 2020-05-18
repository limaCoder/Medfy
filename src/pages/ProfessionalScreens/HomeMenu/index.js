import React, {useState, useEffect} from 'react';
import {
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
import MapView, {Marker, Callout} from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PaHomeMenu = ({navigation}) => {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }
    }

    loadInitialPosition();
  }, []);

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header
        leftComponent={<Icon name="menu" size={30} style={{justifyContent: 'center', bottom: 10, color: '#fff'}} onPress={() => navigation.openDrawer()} />} 
        centerComponent={{ text: 'MENU', style: { color: '#fff', fontSize: 25, bottom: 10  } }}
        containerStyle={{height: 50, alignItems: 'center', backgroundColor: '#28b45d'}}
      />
      <MapView
        style={styles.map}
        onRegionChangeComplete={handleRegionChanged} 
        initialRegion={currentRegion}
      >
      </MapView>
      <LocationButton>
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