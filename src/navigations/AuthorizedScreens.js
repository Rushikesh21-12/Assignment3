import React from "react"

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import ProfileScreen from "../screens/authorizedScreens/ProfileScreen";
import EditProfileScreen from "../screens/authorizedScreens/subScreens/EditProfileScreen";
import SettingScreen from "../screens/authorizedScreens/SettingScreen";
import PrivacyPolicyScreen from "../screens/authorizedScreens/subScreens/PrivacyPolicyScreen";
import AboutScreen from "../screens/authorizedScreens/subScreens/AboutScreen";
import HomeScreen from "../screens/authorizedScreens/HomeScreen";
import ProductScreen from "../screens/authorizedScreens/ProductScreen";
import CartScreen from "../screens/authorizedScreens/CartScreen";
import OrderScreen from "../screens/authorizedScreens/OrderScreen";

const ProfileStack = createNativeStackNavigator()
const ProfileStackScreen = () => (
    <ProfileStack.Navigator screenOptions = {{headerShown: false}}>
        <ProfileStack.Screen name = 'ProfileScreen' component = {ProfileScreen}/>
        <ProfileStack.Screen name = 'EditProfileScreen' component = {EditProfileScreen}/>
    </ProfileStack.Navigator>
)

const SettingStack = createNativeStackNavigator()
const SettingStackScreen = () => (
    <SettingStack.Navigator screenOptions = {{headerShown: false}}>
        <ProfileStack.Screen name = 'SettingScreen' component = {SettingScreen}/>
        <SettingStack.Screen name = 'PrivacyPolicyScreen' component = {PrivacyPolicyScreen}/>
        <SettingStack.Screen name = 'AboutScreen' component = {AboutScreen}/>
    </SettingStack.Navigator>
)

const Tab = createMaterialBottomTabNavigator()
const TabScreen = () => (
    <Tab.Navigator screenOptions = {{headerShown: false}}>
        <Tab.Screen name = 'HomeScreen' component = {HomeScreen}/>
        <Tab.Screen name = 'ProfileStackScreen' component = {ProfileStackScreen}/>
        <Tab.Screen name = 'SettingStackScreen' component = {SettingStackScreen}/>
    </Tab.Navigator>
)

const AuthorizedStack = createDrawerNavigator()
export default function AuthorizedScreens() {
    return(
        <AuthorizedStack.Navigator>
            <AuthorizedStack.Screen name = 'Home' component = {TabScreen} options = {{headerShown:false}}/>
            <AuthorizedStack.Screen name = 'ProductScreen' component = {ProductScreen}/>
            <AuthorizedStack.Screen name = 'CartScreen' component = {CartScreen}/>
            <AuthorizedStack.Screen name = 'OrderScreen' component = {OrderScreen}/>
        </AuthorizedStack.Navigator>
    )
}