import { Platform } from 'react-native';
import styled from 'styled-components';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

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
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 40px;
    height: 47px;
    width: 280px;
`;

export const SubmitButton = styled(Button)`
    height: 47px;
    margin-bottom: 20px;
    margin-left: 5px;
    margin-right: 5px;
`;

export const SignLink = styled.TouchableOpacity`
    align-items: center;
    margin-bottom: 15px;
    margin-top: 1px;
`;

export const SignLinkText = styled.Text`
    color: #009251;
    font-weight: bold;
    font-size: 16px;
`;

export const DropdownView = styled.View`
    border-radius: 40px;
    border-width: 1px;
    border-color: #28b45d;
    height: 47px;
    width: 280px;
    margin-left: 4px;
    margin-bottom: 15px;
`