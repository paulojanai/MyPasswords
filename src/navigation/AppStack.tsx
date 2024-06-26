import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

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
import Header from '../components/ui/Header';

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const EventsTopTab = () => {
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
        header: () => <Header />,
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
            case 'eventsStack':
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
        options={{ tabBarLabel: 'Feed' }}
      />
      <BottomTab.Screen
        name="layers"
        component={LayersScreen}
        options={{ tabBarLabel: 'Layers' }}
      />
      <BottomTab.Screen
        name="message"
        component={MessageScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarBadge: 7,
          tabBarBadgeStyle: {
            fontSize: 12,
            backgroundColor: theme.colors.primary[500],
          },
        }}
      />
      <BottomTab.Screen
        name="eventsStack"
        component={EventsTopTab}
        options={{ tabBarLabel: 'Events' }}
      />
      <BottomTab.Screen
        name="profileStack"
        component={SettingsScreen}
        options={{ tabBarLabel: 'Settings' }}
      />
    </BottomTab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontSize: 18,
        },
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
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
      <Stack.Screen
        name="EventsTopTab"
        component={EventsTopTab}
        options={{
          title: 'All Events',
        }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          title: 'Event details',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
