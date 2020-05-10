import React, { Component } from 'react';
import { Container, DeleteButton, SubmitButton } from './styles';
import { Header } from 'react-native-elements';

export default function CurriculumViewer() {
  return (
    <>
      <Header
      centerComponent={{ text: 'CURRÍCULO', style: { color: '#fff', fontSize: 25, bottom: 10  } }}
      containerStyle={{ height: 50, alignItems: 'center', backgroundColor: '#28b45d' }}
      />
      <Container>
        <DeleteButton> Excluir </DeleteButton>
        <SubmitButton>Salvar</SubmitButton>
      </Container>
    </>
  );
}
