import React, {useState, useEffect} from 'react';
import {
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

import MapView, {Marker, Callout} from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PaHomeMenu = ( {navigation, drawer} ) => {  

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
        centerComponent={{ text: 'MENU', style: { color: '#fff', fontSize: 25, bottom: 10}}}
        containerStyle={{height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#28b45d'}}
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