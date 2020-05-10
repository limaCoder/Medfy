import styled from "styled-components";

export const Container = styled.View`
  background: #fff;
  height: 300px;
  width: 100%;
  position: absolute;
  bottom: 0;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  shadow-radius: 10;
  elevation: 3;
  border: 1px solid #ddd;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
`;

export const ContentContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.View`
  height: 0;
  width: 100%;
  position: absolute;
  bottom: 250;
  align-items: center;
  padding: 30px;
`;

export const TypeTitle = styled.Text`
  font-size: 16px;
  color: #222;
`;

export const TypeDescription = styled.Text`
  color: #28b45c;
  font-size: 14px;
`;

export const TypeImage = styled.Image`
  height: 120px;
  width: 120px;
  margin: 11px 15px;
  margin-top: 30px;
`;

export const LocationButton = styled.TouchableOpacity`
  background-color: #28b45d;
  border-radius: 150px;
  margin-top: -580px;
  margin-left: 270px;
  width: 50px;
  height: 50px;
  align-self: center;
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  elevation: 8;
`