import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { theme } from '../../theme';
import ButtonCreateEvent from '../../components/Button/ButtonCreateEvent';

const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Details Screen</Text>
      <ButtonCreateEvent />
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
  },
});

export default DetailsScreen;
