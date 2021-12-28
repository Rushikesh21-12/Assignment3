import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import OrderItem from '../../components/OrderItem';

export default function OrderScreen({route}) {
   
    const [orderData, setOrderdata] = useState([])
    const [orderTotalPrice, setOrderTotalPrice] = useState([])

    useEffect(() => {
        if(route.params){
            const {cartData, totalPrice} = route.params
            setOrderdata((prevOrderData) => {
                return [...prevOrderData, cartData]
            })
            setOrderTotalPrice((prevOrderData) => {
                return [...prevOrderData, `${totalPrice}`]
            })
        }    
    }, [route.params])

    return (
        <View style = {styles.container}>     
            { orderData.length == 0 
                ?
                    <Text style = {styles.empty}>No order has been placed yet</Text>
                :
                    <FlatList
                        data = {orderData}
                        renderItem = {({item}) => <OrderItem data = {item} totalPrice = {orderTotalPrice}/>}
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1
    },

    empty: {
        textAlign: 'center',
        fontSize: 20,
        color: 'red',
    },
})
