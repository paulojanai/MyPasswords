import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { theme } from '../../theme';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../../components/Button';

const RadioScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleDetailsScreen = () => {
    navigation.navigate('DetailsScreen');
  };

  const handleAllEventsScreen = () => {
    navigation.navigate('EventsTopTab');
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

      <Button
        variant="secondary"
        nameIconRight="chevron-right"
        size="small"
        onPress={handleAllEventsScreen}>
        Go to All Events
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    backgroundColor: theme.colors.neutral[150],
  },

  h1: {
    fontSize: 24,
    color: theme.colors.neutral[900],
    fontWeight: 'bold',
  },
});

export default RadioScreen;
