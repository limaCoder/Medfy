import styled from 'styled-components';

export const Container = styled.View`
    padding: 0 15px;
    height: 59px;
    background-color: white;
    flex-direction: row;
    align-items: center;
    border: 1px solid #28b45d;
`;

export const TInput = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(000, 000, 000, 0.8)',
})`
    flex: 1;
    font-size: 20px;
    margin-left: 10px;
`;