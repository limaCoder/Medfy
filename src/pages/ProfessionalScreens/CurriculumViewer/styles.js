import styled from 'styled-components'
import Button from '../../../components/Button';
import WarningButton from '../../../components/WarningButton'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  padding: 0 30px;
  margin-bottom: 10px;
  flex-direction: row;
`
export const DeleteButton = styled(WarningButton)`
  width: 55%;
  margin: 0 5px;
`
export const SubmitButton = styled(Button)`
  width: 55%;
`