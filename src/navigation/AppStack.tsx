import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';

import FeedScreen from '../screens/FeedScreen';
import LayersScreen from '../screens/LayersScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

import {
  NextsScreen,
  DetailsScreen,
  InscricoesScreen,
  HistoryScreen,
} from '../screens/Printer';

import { theme } from '../theme';

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const PrinterTopTab = () => {
  return (
    <TopTab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.primary[500],
        tabBarInactiveTintColor: theme.colors.neutral[500],
        tabBarPressColor: theme.colors.primary[50],
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary[500],
        },
        tabBarLabelStyle: {
          textTransform: 'none',
          fontSize: 15,
          fontWeight: '500',
        },
        tabBarStyle: {
          backgroundColor: theme.colors.neutral[100],
          borderColor: theme.colors.neutral[100],
          shadowColor: theme.colors.neutral[100],
        },
        tabBarItemStyle: {
          display: 'flex',
          flexDirection: 'row',
        },
        tabBarIconStyle: {
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          switch (route.name) {
            case 'nexts':
              iconName = 'calendar-clear';
              break;
            case 'inscricoes':
              iconName = 'checkbox';
              break;
            case 'historic':
              iconName = 'clockcircle';
              return (
                <IconAntDesign
                  name={`${iconName}${focused ? '' : 'o'}`}
                  size={17}
                  color={color}
                />
              );

            default:
              break;
          }
          return (
            <Icon
              name={`${iconName}${focused ? '' : '-outline'}`}
              size={17}
              color={color}
            />
          );
        },
      })}>
      <TopTab.Screen
        name="nexts"
        component={NextsScreen}
        options={{
          tabBarLabel: 'Próximos',
        }}
      />
      <TopTab.Screen
        name="inscricoes"
        component={InscricoesScreen}
        options={{
          tabBarLabel: 'Inscrições',
        }}
      />
      <TopTab.Screen
        name="historic"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'Histórico',
        }}
      />
    </TopTab.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: theme.colors.primary[500],
        tabBarInactiveTintColor: theme.colors.neutral[500],
        tabBarLabelStyle: {
          textTransform: 'none',
          fontSize: 14,
          fontWeight: '500',
          marginTop: -8,
          marginBottom: 10,
        },
        tabBarIconStyle: {
          backgroundColor: theme.colors.primary[100],
        },
        tabBarStyle: {
          height: 72,
          display: 'flex',
          backgroundColor: theme.colors.neutral[100],
          borderColor: theme.colors.neutral[100],
          shadowColor: theme.colors.neutral[100],
        },
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          switch (route.name) {
            case 'feed':
              iconName = 'home';
              break;
            case 'layers':
              iconName = 'layers';
              break;
            case 'message':
              iconName = 'chatbubble-ellipses';
              break;
            case 'printer':
              iconName = 'print';
              break;
            case 'profileStack':
              iconName = 'settings';
              break;

            default:
              break;
          }
          return (
            <Icon
              name={`${iconName}${focused ? '' : '-outline'}`}
              size={size}
              color={color}
            />
          );
        },
      })}>
      <BottomTab.Screen
        name="feed"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Feed',
        }}
      />
      <BottomTab.Screen
        name="layers"
        component={LayersScreen}
        options={{
          tabBarLabel: 'Layers',
        }}
      />
      <BottomTab.Screen
        name="message"
        component={MessageScreen}
        options={{
          tabBarLabel: 'Message',
        }}
      />
      <BottomTab.Screen
        name="printer"
        component={PrinterTopTab}
        options={{
          headerShown: true,
          tabBarLabel: 'Printer',
          title: 'All printers',
          headerStyle: {
            backgroundColor: theme.colors.neutral[100],
          },
        }}
      />
      <BottomTab.Screen
        name="profileStack"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </BottomTab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.neutral[100],
        },
        headerTintColor: theme.colors.neutral[900],
        headerBackImage: ({}) => (
          <IconFeather
            name="chevron-left"
            size={24}
            color={theme.colors.primary[500]}
          />
        ),
      }}>
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          headerTitleAlign: 'center',
          title: 'Event details',
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitleAlign: 'center',
          title: 'Profile',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
