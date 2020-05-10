import React, { Component } from 'react';
import { Container, Title, SubmitButton } from './styles';
import { Header } from 'react-native-elements';
import DocumentPicker from 'react-native-document-picker';

export default class UploadCurriculum extends Component {

  constructor(props) {
    super(props);
    this.state = {
      singleFile: '',
      multipleFile: [],
    };
  }
  async selectOneFile() {
    //Abrindo o Document Picker para seleção de um tipo de arquivo
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        //pode ser outras opções como:
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printando no console.log relacionado ao arquivo
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Configurando o state para mostrar os atributos de um arquivo único
      this.setState({ singleFile: res });
    } catch (err) {
      //Tratando qualquer exceção
      if (DocumentPicker.isCancel(err)) {
        //Caso o usuário cancele a seleção
        alert('Canceled from single doc picker');
      } else {
        //Alerta para erros desconhecidos
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }

  render() {
    return (
      <>
        <Header
        centerComponent={{ text: 'CURRÍCULO', style: { color: '#fff', fontSize: 25, bottom: 10  } }}
        containerStyle={{ height: 50, alignItems: 'center', backgroundColor: '#28b45d' }}
        />
        <Container>
          <Title>Envie seu Currículo</Title>
          <Title>em PDF</Title>
          <SubmitButton onPress={this.selectOneFile.bind(this)} >Enviar</SubmitButton>
        </Container>
    </>
    );
  }
}
