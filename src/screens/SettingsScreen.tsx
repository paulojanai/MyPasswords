import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { theme } from '../theme';
import Button from '../components/Button';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const ProfileScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleProfileScreen = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Settings Screen</Text>

      <Button variant="secondary" size="small" onPress={handleProfileScreen}>
        Go to Profile
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
