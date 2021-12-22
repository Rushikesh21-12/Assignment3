import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ForgotPasswordScreen from '../screens/unAuthorizedScreens/ForgotPasswordScreen';
import LoginScreen from '../screens/unAuthorizedScreens/LoginScreen';
import RegisterScreen from '../screens/unAuthorizedScreens/RegisterScreen';

const UnAuthorizedStack = createNativeStackNavigator()

export default function UnAuthorizedScreens() {
    return(
        <UnAuthorizedStack.Navigator screenOptions = {{headerShown: false}}>
            <UnAuthorizedStack.Screen name = 'LoginScreen' component = {LoginScreen} />
            <UnAuthorizedStack.Screen name = 'RegisterScreen' component = {RegisterScreen} />
            <UnAuthorizedStack.Screen name = 'ForgotPasswordScreen' component = {ForgotPasswordScreen}/>
        </UnAuthorizedStack.Navigator>
    )
}