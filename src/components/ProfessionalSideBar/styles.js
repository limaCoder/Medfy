import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`

export const UserArea = styled.View`
  flex-direction: row;
  background-color: #28b45d;
  height: 110;
  justify-content: center;
  align-items: center;
`

export const UserImage = styled.Image`
  width: 80;
  height: 80;
  top: 0;
  left: 15;
`

export const UserName = styled.Text`
  margin-left: 10;
  font-size: 18;
  color: #fff;
  bottom: 20;
  left: 15;
`