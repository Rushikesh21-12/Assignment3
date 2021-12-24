import React from 'react'
import { View, Text, TextInput } from 'react-native'

export default function ProductScreen() {
    return (
        <View style = {{flex: 1, justifyContent: 'space-between'}}>
            <TextInput style = {{backgroundColor: 'red'}}/>
            <TextInput style = {{backgroundColor: 'green'}}/>
            <TextInput style = {{backgroundColor: 'blue'}}/>
            <TextInput style = {{backgroundColor: 'yellow'}}/>
            <TextInput style = {{backgroundColor: 'cyan'}}/>
            <TextInput style = {{backgroundColor: 'black'}}/>
 
        </View>
    )
}
