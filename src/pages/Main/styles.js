import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const Logo = styled.Image`
  margin-top: 10px;
`;

export const CardsContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500px;
`;

export const Card = styled.View`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 8px;
  overflow: hidden;
  z-index: ${props => props.index};
`;

export const Avatar = styled.Image`
  flex: 1;
  height: 300;
`;

export const Footer = styled.View`
  background-color: #fff;
  padding: 15px 20px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Bio = styled.Text`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
  line-height: 18px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  elevation: 2px;
  shadow-color: #000;
  shadow-opacity: 0.05px;
  shadow-radius: 2px;
`;

export const Empty = styled.Text`
  font-size: 24px;
  color: #999;
  align-self: center;
  font-weight: bold;
  margin-bottom: 200px;
`;
