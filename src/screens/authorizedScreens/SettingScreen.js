import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'

export default function SettingScreen({navigation}) {
    return (
        <View style = {styles.container}>

            <Pressable
               onPress = {() => navigation.navigate('PrivacyPolicyScreen')}
                style={({ pressed }) => [
                {
                    backgroundColor: pressed
                    ? 'blue'
                    : 'dodgerblue'
                },
                styles.pressable
            ]}>
                 <Text style = {styles.item}>Privacy Policy</Text>
            </Pressable>

            <Pressable
               onPress = {() => navigation.navigate('AboutScreen')}
                style={({ pressed }) => [
                {
                    backgroundColor: pressed
                    ? 'blue'
                    : 'dodgerblue'
                },
                styles.pressable
            ]}>
                 <Text style = {styles.item}>About</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 20
    },

    item:{
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
        fontSize: 16
    },

    pressable: {
        borderRadius: 10,
        marginVertical: 10
    }
})
