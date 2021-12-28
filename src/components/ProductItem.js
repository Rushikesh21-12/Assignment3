import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Title, } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function CardView(props) {
    return (
        <View style = {styles.container}>
            <View style = {styles.cardContainer}>

                <Card>
                    <Card.Cover source={{ uri:  props.src}} title = {props.title} />

                    <Card.Content style = {styles.content}>
                        <View>
                            <Title style = {styles.title}>{props.title}</Title>
                            <Title style = {styles.price}>Price : {props.price} $</Title>
                        </View>
                        <TouchableOpacity style = {styles.addIcon} onPress = {() => {props.onAddItem(props.src, props.title, props.price)}}>
                            <Ionicons name = 'add-circle' size = {30} color = 'black' />
                        </TouchableOpacity>
                    </Card.Content> 
                </Card>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%', 
        width: '50%', 
        marginVertical: '3%'
    },

    cardContainer: {
        marginHorizontal: '3%'
    },

    content: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    title: {
        fontSize: 17,
    },

    price: {
        fontSize: 14,
    },

    addIcon: {
        marginTop: 5
    }
})

