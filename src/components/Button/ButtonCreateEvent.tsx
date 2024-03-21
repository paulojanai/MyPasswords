import { Linking } from 'react-native';
import React from 'react';
import Button from '.';

const ButtonCreateEvent = () => {
  const handleOpenLink = async () => {
    const url = 'https://www.paulojanai.com'; // Substitua pelo URL que deseja abrir
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error('Não é possível abrir o link:', url);
    }
  };
  return (
    <Button
      nameIconLeft="calendar"
      style={{ position: 'absolute', bottom: 16, right: 16 }}
      onPress={handleOpenLink}>
      Criar evento
    </Button>
  );
};

export default ButtonCreateEvent;
