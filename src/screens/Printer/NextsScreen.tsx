import React from 'react';
import { Text, StyleSheet, SafeAreaView, Linking } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { theme } from '../../theme';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../../components/Button';
import CreateEvent from '../../components/Button/ButtonCreateEvent';

const RadioScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleDetailsScreen = () => {
    navigation.navigate('DetailsScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Próximos Screen</Text>
      <Button
        variant="secondary"
        nameIconRight="chevron-right"
        size="small"
        onPress={handleDetailsScreen}>
        Go to Details
      </Button>

      <CreateEvent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: 24,
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
