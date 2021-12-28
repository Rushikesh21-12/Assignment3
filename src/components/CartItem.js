import React, {useState} from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function CartItem(props) {

    const [qty, setQty] = useState(1)
    const [individualTotal, setIndividualTotal] = useState(props.price)

    const onDecreaseQuantity = (qty, price) => {
        if(qty !== 1){
            setQty(qty - 1)
            setIndividualTotal((qty - 1) * price)
            props.onQtyChange(qty, price, 'decrease')
        } 
    }
    const onIncreaseQuantity = (qty, price) => {
        setQty(qty + 1)
        setIndividualTotal((qty + 1) * price)
        props.onQtyChange(qty, price, 'increase')
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.containerOne}>  
                <Image style = {styles.image} source = {{uri :props.src}} />

                <View style = {styles.container2}>
                    <Text style = {styles.text}>{props.title}</Text>

                    <Text style = {styles.text}>Price : {props.price} $</Text>

                    <View style = {styles.qty}>
                        <Text style = {styles.text}>Quantity : </Text>
                        
                        <TouchableOpacity style = {styles.mtTwo} onPress = {() => onDecreaseQuantity(qty, props.price)}>
                            <Ionicons name = 'md-remove-circle-outline' size = {20} color = 'black'/>
                        </TouchableOpacity>

                        <Text style = {[styles.text, styles.mtTwo]}>{qty}</Text>
                        
                        <TouchableOpacity style = {styles.mtTwo} onPress = {() => onIncreaseQuantity(qty, props.price)}>
                            <Ionicons name = 'md-add-circle-outline' size = {20} color = 'black'/>
                        </TouchableOpacity>
                    </View>
                    {qty !== 1 ? <Text>Total : {individualTotal}</Text> : null}
                </View>
            </View>
            
            <View style = {styles.delete}>
                <TouchableOpacity onPress = {() => {props.onRemove(props.title, props.price, qty)}}>
                    <Ionicons name = 'remove-circle' size = {25} color = 'black'/>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        flexDirection: "row",
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 1,
        backgroundColor:  'white',
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 10,
    },

    containerOne: {
        flexDirection: "row",
    },

    container2:{
        marginLeft: 20,
        alignSelf: 'center',
    },

    image:{
        height: 80,
        width: 80
    },

    text:{
        fontSize: 16,
        fontWeight: "bold",
    },

    delete: {
        alignSelf: 'center',
    },

    qty: {
        flexDirection: 'row',
    },
    mtTwo: {
        marginTop: 2
    }

})
