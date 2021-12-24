import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Title, } from 'react-native-paper'

export default function CardView(props) {
    return (
        <View style = {styles.container}>
            <View style = {styles.cardContainer}>

                <Card>
                    <Card.Cover source={{ uri:  props.src}} title = {props.title} />

                    <Card.Content style = {styles.content}>
                        <Title style = {styles.title}>{props.title}</Title>
                    </Card.Content> 
                </Card>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%', 
        width: '33%', 
        marginVertical: '3%'
    },

    cardContainer: {
        marginHorizontal: '3%'
    },

    content: {
        padding: 10
    },

    title: {
        textAlign: 'center'
    }
})

