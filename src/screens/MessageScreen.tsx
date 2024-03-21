import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { theme } from '../theme';

const MessageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Message Screen</Text>
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

export default MessageScreen;
