import React from 'react';
import { Text, StyleSheet, SafeAreaView, Linking } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import Button from '../components/Button';
import { theme } from '../theme';

const ProfileScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Profile Screen</Text>
      <Button variant="secondary" size="small" onPress={navigation.goBack}>
        Go Back
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

export default ProfileScreen;
