import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'

import App from './home';
import User from './profile';
import Contact from './contato';
import Polos from './polos';
import AlertPage from './alertpage';

const Tab = createBottomTabNavigator();

export default function MyApp() {
  return (

    <Tab.Navigator>
      <Tab.Screen name='App' component={App}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#F8C500',
          tabBarInactiveTintColor: '#fff',
          tabBarLabel: 'Home',
          tabBarStyle: {
            backgroundColor: '#000',
            height: 90
          },
          tabBarIcon: ({ color }) => (
            <Feather name="globe" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen name='Polos' component={Polos}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#F8C500',
          tabBarInactiveTintColor: '#fff',
          tabBarLabel: 'Polos',
          tabBarStyle: {
            backgroundColor: '#000',
            height: 90
          },
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen name='User' component={User}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#F8C500',
          tabBarInactiveTintColor: '#fff',
          tabBarLabel: 'Seu Perfil',
          tabBarStyle: {
            backgroundColor: '#000',
            height: 90
          },
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={26} />
          )
        }}
      />

      <Tab.Screen name='Contact' component={Contact}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#F8C500',
          tabBarInactiveTintColor: '#fff',
          tabBarLabel: 'Fale Conosco',
          tabBarStyle: {
            backgroundColor: '#000',
            height: 90
          },
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" color={color} size={26} />
          )
        }}
      />

      <Tab.Screen name='AlertPage' component={AlertPage}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#000',
          tabBarLabel: 'Perigo',
          tabBarStyle: {
            backgroundColor: '#f00',
            height: 90
          },
          tabBarIcon: ({ color }) => (
            <Feather name="alert-circle" color={color} size={26} />
          )
        }}
      />

    </Tab.Navigator>

  );
}