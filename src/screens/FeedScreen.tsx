import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import { theme } from '../theme';

const FeedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Settings Screen</Text>
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

export default FeedScreen;
