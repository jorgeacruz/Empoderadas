import React, { createRef } from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../pages/home';
import CreateAccount from '../pages/home/createAccount';
import LostPassword from '../pages/home/lostPass';
import MyApp from '../pages/app';

const Stack = createNativeStackNavigator();

export default function Routes() {


    return (
        <NavigationContainer ref={createRef}>
            <Stack.Navigator>

                <Stack.Screen name='HomeScreen' component={HomeScreen}
                    options={{
                        title: 'Fazer Login',
                        headerTitleStyle: {
                            color: '#000'
                        },
                        headerTintColor: '#fff',
                        headerBackTitle: '',
                        headerStyle: {
                            backgroundColor: '#000'
                        }
                    }}
                />

                <Stack.Screen name='CreateAccount' component={CreateAccount}
                    options={{
                        title: 'Criando Conta',
                        headerTitleStyle: {
                            color: '#000'
                        },
                        headerTintColor: '#fff',
                        headerBackTitle: '',
                        headerStyle: {
                            backgroundColor: '#000'
                        }
                    }}
                />

                <Stack.Screen name='LostPassword' component={LostPassword}
                    options={{
                        title: 'Perdi minha Senha',
                        headerTitleStyle: {
                            color: '#000'
                        },
                        headerTintColor: '#fff',
                        headerBackTitle: '',
                        headerStyle: {
                            backgroundColor: '#000'
                        }
                    }}
                />

                <Stack.Screen name='MyApp' component={MyApp}
                    options={{
                        title: 'MULHER, SUA VOZ AQUI TEM PODER!',
                        headerTitleStyle: {
                            color: '#000',
                            fontSize: 14,
                            fontWeight: 'bold'
                        },
                        headerTintColor: '#fff',
                        headerBackTitle: '',
                        headerStyle: {
                            backgroundColor: '#F8C500',
                            height: 300,
                        },
                        headerLeft: () => (
                            <Image source={require('../images/logo-Preta.png')} style={styles.logo} />
                        )
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 40,
        height: 40,
        paddingRight: 50
    }
})