import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { theme } from '../theme';

const FeedScreen = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral[150],
  },
});

export default FeedScreen;
