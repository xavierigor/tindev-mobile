import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  background-color: #f5f5f5;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 46px;
  padding: 0 15px;
  align-self: stretch;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #df4723;
  height: 46px;
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
