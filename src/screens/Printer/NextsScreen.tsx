import React from 'react';
import { Text, StyleSheet, SafeAreaView, Linking } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { theme } from '../../theme';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../../components/Button';

const RadioScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleDetailsScreen = () => {
    navigation.navigate('DetailsScreen');
  };

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
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Próximos Screen</Text>
      <Button variant="secondary" size="small" onPress={handleDetailsScreen}>
        Go to Details
      </Button>

      <Button
        style={{ position: 'absolute', bottom: 16, right: 16 }}
        onPress={handleOpenLink}>
        Criar evento
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.neutral[150],
  },

  h1: {
    fontSize: 24,
    color: theme.colors.neutral[900],
    fontWeight: 'bold',
    marginBottom: 24,
  },
});

export default RadioScreen;
