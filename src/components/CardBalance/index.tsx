import React from 'react';
import styled from 'styled-components/native';

const CardBalance = () => {
  return (
    <Container>
      <Label>Pay</Label>
    </Container>
  );
};

const Container = styled.View`
  height: 120px;
  width: 110px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d3a35;
`;

const Label = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

export default CardBalance;
