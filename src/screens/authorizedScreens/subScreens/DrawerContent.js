import React, {useContext, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Drawer, Switch } from "react-native-paper";

import { AuthContext } from "../../../context/context";

import Ionicons from 'react-native-vector-icons/Ionicons';

const Icon = (props) => {
    return <Ionicons name = {props.name} size = {25} color = 'black' />
}

export default function DrawerContent(props){

    const {signOut} = useContext(AuthContext)

    const [isDark, setIsDark] = useState(false)

    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    return(
        <View style = {styles.container}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section>
                    <DrawerItemList {...props}/>                 
                </Drawer.Section>

                <Drawer.Section title = "Preference">
                    <TouchableOpacity onPress = {() => {toggleTheme()}}>
                        <View style = {styles.preference}>
                            <Text style = {styles.switch}>Dark Theme</Text>
                            <Switch value = {isDark} onValueChange = {() => {toggleTheme()}}/>
                        </View>
                    </TouchableOpacity>
                </Drawer.Section>
            </DrawerContentScrollView>

            <Drawer.Section>
                <DrawerItem
                    icon = {() => (<Icon name = "exit-outline"/>)}
                    label = {'Sign Out'}
                    onPress = {() => signOut()}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    preference: {
        flexDirection: "row", 
        justifyContent: "space-between"
    },

    switch: {
        marginLeft: 15
    }
})