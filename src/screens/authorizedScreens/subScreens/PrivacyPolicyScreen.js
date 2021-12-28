import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

export default function PrivacyPolicyScreen() {
    return (
        <View style = {styles.container}> 
            <WebView source = {{uri: 'https://www.battlegroundsmobileindia.com/privacy'}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
}) 
