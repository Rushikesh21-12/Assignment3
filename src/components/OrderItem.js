import React from 'react'
import { View, StyleSheet, Text, FlatList, Image } from 'react-native'

export default function OrderItem(props){

    return (
        <View style = {styles.mainContainer}>
           <FlatList
                data = {props.data}
                renderItem = {({item}) => {
                    return(
                        <View style = {styles.oneItem}>
                            <View style = {styles.rowItem}>
                            <Image source = {{uri: item.src}} style = {styles.image}/>
                            <Text style = {styles.textStyle}>{item.title}</Text>
                            </View>

                            <Text style = {styles.price}>Price: {item.price}</Text>
                        </View>    
                    )
                }}
            />   
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        backgroundColor: 'white',        
        
    },

    oneItem: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    rowItem:{
        flexDirection: 'row',
        marginVertical: 5
    },

    image:{
        width: 30,
        height: 30,
        marginRight: 10
    },

    textStyle: {
        alignSelf: 'center',
        fontSize: 16
    },

    price: {
        alignSelf: 'center'
    }
})