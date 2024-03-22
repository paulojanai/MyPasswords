import React from 'react';
import { StyleSheet, SafeAreaView, TextInput, View } from 'react-native';
import { theme } from '../theme';
import Icon from 'react-native-vector-icons/Feather';
import { stylesGlobal } from '../theme/styles';

const MessageScreen = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={[styles.container, stylesGlobal.grid]}>
      <View style={{ position: 'relative', display: 'flex', marginTop: 16 }}>
        <TextInput
          style={styles.input}
          placeholder="Search message..."
          placeholderTextColor={theme.colors.neutral[500]}
          onChangeText={onChangeText}
          value={text}
        />
        <View
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            width: 56,
            height: 56,
          }}>
          <Icon name="search" size={20} color={theme.colors.neutral[500]} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 56,
    fontSize: 16,
    paddingLeft: 48,
    paddingRight: 16,
    backgroundColor: theme.colors.neutral[100],
    color: theme.colors.neutral[900],
    borderColor: theme.colors.neutral[300],
    borderWidth: 1,
    borderRadius: 12,
  },

  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral[150],
  },

  h1: {
    fontSize: 24,
    color: theme.colors.neutral[900],
    fontWeight: 'bold',
  },
});

export default MessageScreen;
