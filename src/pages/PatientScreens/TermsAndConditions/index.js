import React , {Component} from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class PaTermsAndConditions extends Component{

  state = {
      accepted: false
  }

  render(){

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
      const paddingToBottom = 20;
      return layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom;
    };
    
    return (
      <>
        <Header
          centerComponent={{ text: 'TERMOS E CONDIÇÕES DE USO', style: { color: '#fff', fontSize: 20, bottom: 10, right: 170}}}
          containerStyle={{width: 700, height: 50, alignItems: 'center', backgroundColor: '#28b45d'}}
        />
        <View style={styles.container}>
          <ScrollView 
            style={styles.tcContainer}
            onScroll={({nativeEvent}) => {
              if (isCloseToBottom(nativeEvent)) {
                this.setState({
                accepted: true
                })
              }
            }}>
            <Text style={styles.title}>1. Relacionamento Contratual</Text>
              <Text style={styles.tcP}>Estes termos de uso (“Termos”) regem seu acesso e uso, como pessoa física, dentro do Brasil, de aplicativos, sites de Internet, conteúdos, bens e também serviços (os “Serviços”) disponibilizados pela Medfy, estabelecida no Brasil, em São Vicente - SP. </Text>
              <Text style={styles.tcP}>POR FAVOR, LEIA COM ATENÇÃO ESTES TERMOS ANTES DE ACESSAR OU USAR OS SERVIÇOS.</Text>          
              <Text style={styles.tcP}>Ao acessar e usar os Serviços você concorda com os presentes termos e condições, que estabelecem o relacionamento contratual entre você, na qualidade de usuário (a), e a Medfy. Se você não concorda com estes Termos, você não pode acessar nem usar os Serviços. A Medfy poderá imediatamente encerrar estes Termos ou quaisquer Serviços em relação a você ou, de modo geral, deixar de oferecer ou negar acesso aos Serviços ou a qualquer parte deles, a qualquer momento e por qualquer motivo.</Text>
              <Text style={styles.tcP}>Termos adicionais poderão se aplicar a determinados Serviços, tais como condições para um evento, atividade ou promoção em particular, e esses termos adicionais serão divulgados em relação aos respectivos Serviços. Termos adicionais são complementares e considerados parte integrante destes Termos para os efeitos dos respectivos Serviços. Termos adicionais prevalecerão sobre estes Termos em caso de conflito com relação aos referidos Serviços.</Text>
            <Text style={styles.title}>2. Os Serviços</Text>
              <Text style={styles.tcP}>Os Serviços integram uma plataforma de tecnologia que permite aos (às) usuários (as) de aplicativos móveis, fornecidos como parte dos Serviços (cada qual um aplicativo), solicitar e programar serviços de atendimento domiciliar e/ou compra/venda e doação de remédios com terceiros independentes provedores desses serviços/produtos. Os Serviços são disponibilizados para seu uso pessoal e não comercial. VOCÊ RECONHECE QUE A MEDFY NÃO É FORNECEDORA DE BENS, NÃO PRESTA SERVIÇOS DE ATENDIMENTO DOMICILIAR, NEM FUNCIONA COMO HOSPITAL, E QUE TODOS ESSES SERVIÇOS DE ATENDIMENTO E/OU DOAÇÃO DE REMÉDIOS SÃO PRESTADOS POR PARCEIROS INDEPENDENTES, QUE NÃO SÃO EMPREGADOS (AS) E NEM REPRESENTANTES DA MEDFY.</Text>
            <Text style={styles.title}>3. Uso dos Serviços e</Text>
              <Text style={styles.title}>Contas de Usuários</Text>
                <Text style={styles.tcP}>Para utilizar grande parte dos Serviços, você deve registrar-se e manter uma conta pessoal de usuário de Serviços. Você deve ter pelo menos 18 anos para registrar uma Conta. Usuários com idade igual ou superior a 12 anos poderão registrar-se e manter uma Conta desde que tenham sido devidamente representados ou tenham obtido o consentimento de seu (s) responsável (is) legal (is), conforme o procedimento para registro aplicável em cada caso. O registro de Conta exige que a Medfy colete determinados dados pessoais, que podem incluir seu nome, endereço, número de telefone celular e data de nascimento, assim como pelo menos um método de pagamento válido (cartão de crédito ou parceiro de pagamento aceito pela Medfy). Você concorda em manter informações corretas, completas e atualizadas em sua Conta. Se você não mantiver informações corretas, completas e atualizadas em sua Conta, inclusive se o método de pagamento informado for inválido ou expirado, você poderá ficar impossibilitado (a) de acessar e usar os Serviços. Você é responsável por todas as atividades realizadas na sua Conta e concorda em manter sempre a segurança e confidencialidade do nome de usuário e senha da sua Conta. A menos que diversamente permitido pela Medfy por escrito, você poderá manter apenas uma Conta.</Text>
            <Text style={styles.title}>4. Conduta e Obrigações do Usário</Text>
              <Text style={styles.tcP}>Você não poderá autorizar terceiros (as) a usar sua Conta ou receber serviços de atendimento/doação dos Parceiros Independentes, salvo se estiverem em sua companhia. Você não poderá ceder, nem de qualquer outro modo transferir, sua Conta a nenhuma outra pessoa ou entidade. Você concorda em cumprir todas as leis aplicáveis quando usar os Serviços e que somente poderá usar os Serviços para finalidades legítimas. Você não poderá, quando usar os Serviços, causar transtorno, aborrecimento, inconveniente ou danos à propriedade dos Parceiros Independentes ou de qualquer outro terceiro. Em determinadas situações, você poderá ser solicitado (a) a fornecer comprovante de identidade para acessar ou usar os Serviços, e concorda que poderá ter seu acesso ou uso dos Serviços negado caso você se recuse a fornecer um comprovante de identidade. O usuário estará ciente de que suas ações durante o uso da plataforma poderão prejudicar sua permanência no sistema. O Medfy não será responsável por condutas inadequadas, como atitudes racistas, homofóbicas, xenofóbicas e quaisquer outras variações que viole as liberdades individuais, respeitando os critérios estabelecidos na constituição federal de 1988.</Text>
            <Text style={styles.title}>5. Conteúdo Fornecido pelo (a) Usuário (a)</Text>
              <Text style={styles.tcP}>A Medfy poderá, a seu exclusivo critério, permitir que você ou qualquer pessoa apresente, carregue, publique ou, de qualquer modo, disponibilize para a Medfy por meio dos Serviços, conteúdo e informações de texto, áudio ou vídeo, inclusive comentários e feedbacks relacionados aos Serviços, iniciação de solicitação de suporte e registro em concursos e promoções (“Conteúdo de Usuário (a)"). Qualquer Conteúdo de Usuário (a) fornecido por você permanece de sua propriedade. Contudo, ao fornecer Conteúdo de Usuário(a) para a Medfy, você outorga a Medfy e suas afiliadas uma licença dos direitos autorais sobre o Conteúdo de Usuário em nível mundial, perpétua, irrevogável, transferível, isenta de royalties, e com direito a sublicenciar, usar, copiar, modificar, criar obras derivadas, distribuir, publicar, exibir, executar em público e, de qualquer outro modo, explorar esse Conteúdo de Usuário(a) em todos os formatos e canais de distribuição hoje conhecidos ou desenvolvidos no futuro (inclusive em conexão com os Serviços e com os negócios da Medfy e em sites e Serviços de terceiros), sem ulterior aviso a você ou seu consentimento, e sem necessidade de pagamento a você ou a qualquer outra pessoa ou entidade.</Text>
              <Text style={styles.tcP}>Você declara e garante que: (i) é o(a) único(a) e exclusivo(a) proprietário(a) de todo Conteúdo de Usuário(a) ou tem todos os direitos, licenças, autorizações e permissões necessários para outorgar à Medfy a licença sobre o Conteúdo de Usuário(a) acima referido; e (ii) nem o Conteúdo de Usuário(a) nem sua apresentação, carregamento, publicação ou outra forma de disponibilização desse Conteúdo de Usuário(a), tampouco o uso do Conteúdo de Usuário(a) pela Medfy da forma aqui permitida, infringirão, constituirão apropriação indevida nem violação de propriedade intelectual ou direito de propriedade de terceiros(a), nem direitos de publicidade ou privacidade e também não resultarão na violação de qualquer lei ou regulamento aplicável.</Text>
          </ScrollView>
            <TouchableOpacity disabled={ !this.state.accepted } style={ this.state.accepted ? styles.button : styles.buttonDisabled }><Text style={styles.buttonLabel}>Aceitar</Text></TouchableOpacity>
        </View>
      </>
    );
  }
}

const { height } = Dimensions.get('window');

const styles = {
  container:{
    marginLeft: 10,
    marginRight: 10
  },
  title: {
      marginTop: 5,
      fontSize: 22,
      alignSelf: 'flex-start',
  },
  tcP: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 16
  },
  tcContainer: {
      marginBottom: 15,
      height: height * .7
  },
  button:{
      backgroundColor: '#009251',
      borderRadius: 5,
      padding: 10
  },
  buttonDisabled:{
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10
 },
  buttonLabel:{
      fontSize: 14,
      color: '#FFF',
      alignSelf: 'center'
  }
}
