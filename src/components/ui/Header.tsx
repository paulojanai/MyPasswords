import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { stylesGlobal } from '../../theme/styles';
import { theme } from '../../theme';

const Header = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleNav = () => {
    console.warn('Press in');
  };

  const handleProfileScreen = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <View style={[styles.headerContainer, stylesGlobal.grid]}>
      <View style={styles.headerContentLeft}>
        <View style={styles.headerLogoThumb}>
          <Image
            style={stylesGlobal.img}
            source={require('../../assets/logo.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.headerDescription}>
          <Text
            style={styles.headerTitle}
            numberOfLines={1}
            ellipsizeMode="tail">
            Paulo Janai Server
          </Text>
          <Text
            style={styles.headerSubtitle}
            numberOfLines={1}
            ellipsizeMode="tail">
            23 online
          </Text>
        </View>
      </View>
      <View style={styles.headerContentRight}>
        <Pressable onPress={handleNav}>
          <Icon name="bell" size={24} color={theme.colors.neutral[700]} />
        </Pressable>
        <Pressable onPress={handleNav}>
          <Icon name="bookmark" size={24} color={theme.colors.neutral[700]} />
        </Pressable>
        <Pressable onPress={handleProfileScreen}>
          <View style={styles.profileThumb}>
            <Image
              style={stylesGlobal.img}
              source={require('../../assets/my_photo.png')}
              resizeMode="contain"></Image>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.neutral[100],
    paddingVertical: 16,
  },

  headerLogoThumb: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#CCC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  headerDescription: {
    maxWidth: 125,
    display: 'flex',
    alignItems: 'flex-start',
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.neutral[700],
  },

  headerSubtitle: {
    fontSize: 13,
    fontWeight: '500',
    color: theme.colors.neutral[500],
  },

  headerContentLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
  },

  profileThumb: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: '#CCC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  headerContentRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 24,
  },
});

export default Header;
