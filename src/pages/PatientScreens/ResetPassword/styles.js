import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

export const HeaderView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    margin-bottom: 70px;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    margin-bottom: 70px;
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

export const SignLink = styled.TouchableOpacity`
    align-items: center;
    margin-top: 16px;
`;

export const SignLinkText = styled.Text`
    color: #009251;
    font-weight: bold;
    font-size: 20px;
`;

export const Label = styled.Text`
    color: 'rgba(000, 000, 000, 0.7)';
    font-weight: bold;
    font-size: 20px;
`;