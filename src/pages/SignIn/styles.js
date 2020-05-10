import { Platform } from 'react-native';
import styled from 'styled-components';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
`;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 20px;
`;

export const FormInput = styled(Input)`
    margin-bottom: 15px;
    border-radius: 40px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 1px;
`;

export const ForgotPasswordLink = styled.TouchableOpacity`
    align-items: center;
    margin-bottom: 15px;
    margin-top: 1px;
`;

export const ForgotPasswordText = styled.Text`
    color: #009251;
    font-weight: bold;
    font-size: 16px;
`;

export const SignUpLink = styled.TouchableOpacity`
    align-items: center;
    margin-bottom: 15px;
    margin-top: 15px;
`

export const SignUpLinkText = styled.Text`
    color: #009251;
    font-weight: bold;
    font-size: 20px;
`