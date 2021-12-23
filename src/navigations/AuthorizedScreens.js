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

import DrawerContent from "../screens/authorizedScreens/subScreens/DrawerContent";

import Ionicons from 'react-native-vector-icons/Ionicons';

const Icon = (props, {color}) => {
    return <Ionicons name = {props.name} size = {25} color = {color} />
}

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
    <Tab.Navigator 
        shifting = {true}
        screenOptions = {({ route }) => ({
            headerShown: false,

            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'HomeScreen') 
                    iconName = focused ? 'home': 'home-outline'

                else if (route.name === 'ProfileStackScreen') 
                    iconName = focused ? 'person' : 'person-outline'

                else if (route.name === 'SettingStackScreen') 
                    iconName = focused ? 'settings' : 'settings-outline'

                else if (route.name === 'MB4') 
                    iconName = focused ? 'heart' : 'heart-outline'
                    
                return <Ionicons name = {iconName} size = {20} color = {color} />
            }
        })}
    >

        <Tab.Screen 
            name = 'HomeScreen' 
            component = {HomeScreen} 
            options = {{title: 'Home'}}
        />

        <Tab.Screen 
            name = 'ProfileStackScreen' 
            component = {ProfileStackScreen}
            options = {{
                title: 'Profile',
                tabBarColor: 'green'
            }}
        />

        <Tab.Screen 
            name = 'SettingStackScreen' 
            component = {SettingStackScreen}
            options = {{
                title: 'Setting',
                tabBarColor: 'black'
            }}
        />

    </Tab.Navigator>
)

const AuthorizedStack = createDrawerNavigator()
export default function AuthorizedScreens() {
    return(
        <AuthorizedStack.Navigator 
            drawerContent = {props => <DrawerContent {...props}/>} 
            screenOptions={{
                drawerActiveTintColor: 'green'
            }}
        >

            <AuthorizedStack.Screen 
                name = 'Home' 
                component = {TabScreen} 
                options = {{
                    headerShown: false, 
                    drawerIcon: () => <Icon name = "home-outline"/>
                }}
            />

            <AuthorizedStack.Screen 
                name = 'ProductScreen' 
                component = {ProductScreen}
                options = {{
                    drawerIcon: () => <Icon name = "logo-pinterest"/>
                }}
            />

            <AuthorizedStack.Screen 
                name = 'CartScreen' 
                component = {CartScreen}
                options = {{
                    drawerIcon: () => <Icon name = "cart-outline"/>
                }}
            />

            <AuthorizedStack.Screen 
                name = 'OrderScreen' 
                component = {OrderScreen}
                options = {{
                    drawerIcon: () => <Icon name = "clipboard-outline"/>
                }}
            />

        </AuthorizedStack.Navigator>
    )
}