import React from 'react';
import { Rating, AirbnbRating } from 'react-native-elements';
import { DrawerNavigatorItems } from  'react-navigation-drawer';
import { Container, UserArea, UserImage, UserName } from './styles';

export default function PatientSideBar({...props}) {
  return (
    <Container>
      <UserArea>
        <UserImage
          source={require('../../assets/user.png')}
        />
        <UserName>Mario Lima</UserName>
        <Rating 
        type='custom'
        imageSize={23}
        tintColor='#28b45d'
        style={{right: 80, top: 5}} />
      </UserArea>
      <DrawerNavigatorItems {...props} />
    </Container>
  );
}
