import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function Forminput(props) {
    return (
        <View style = {styles.container}>

            <Text style = {styles.label}>{props.label}</Text>

            <TextInput {...props} style = {styles.textInput}/>

            {props.errorName ? <Text style = {styles.errorStyle}>{props.errorName}</Text> : null}

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 10
    },

    label: {
        fontSize: 16,
        marginBottom: 3,
        marginLeft: 3
    },

    textInput: {
        borderBottomWidth: 1,
        borderColor: 'black'
    },

    errorStyle: {
        color: 'red'
    }
})
