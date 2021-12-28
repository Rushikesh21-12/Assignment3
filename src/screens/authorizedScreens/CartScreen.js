import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, ScrollView, Button } from 'react-native'
import CartItem from '../../components/CartItem'


export default function CartScreen({navigation, route}) {

    useEffect( () => {
        if(route.params){
            const {src, title, price} = route.params
            
            if(!cartData.some(el => el.title === title)){
                setTotalPrice(totalPrice + price)
                setCartData((prevCartData) => {
                    return[
                      ...prevCartData,
                      {src: src, title: title, price: price},   
                    ];
                });
            }else {
                alert('Already in cart')
            }
        }
    }, [route.params]);

    const [totalPrice, setTotalPrice] = useState(0)
    const [cartData, setCartData] = useState([])

    const onRemoveItem = (title, price, qty) => {
        setTotalPrice(totalPrice - (qty * price))
        setCartData((prevData) => {
            return prevData.filter(data => data.title != title)
          })
    }
    
    const onQtyChange = (qty, price, change) => {
        change == 'increase' 
            ? setTotalPrice(totalPrice - ((qty - 1) * price) + (qty * price))
            : setTotalPrice(totalPrice + ((qty - 1) * price) - (qty * price))
    }
    return (
        <ScrollView style = {styles.container}>
            <View>
                {cartData == '' 
                    ? <Text style = {styles.empty}>Cart is empty</Text> 
                    : cartData.map((item) => {
                        
                        return (
                            <CartItem 
                                key = {item.title}
                                src = {item.src} 
                                title = {item.title} 
                                price = {item.price} 
                                onRemove = {onRemoveItem}
                                onQtyChange = {onQtyChange}
                            />
                        )
                    })
                }
            </View>
            {totalPrice !== 0 
                ? 
                    <View style = {styles.lastView}>  
                        <Text style = {styles.totalPrice}>Total Price : {totalPrice} $</Text> 

                        <Button title = 'Place Order' onPress = {() => navigation.navigate('OrderScreen', {
                            cartData: cartData,
                            totalPrice: totalPrice
                        })}/>
                    </View>
                : 
                    null
            }
        </ScrollView>
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

    totalPrice: {
        fontSize: 20,
        alignSelf: 'flex-end',
        marginVertical: 10
    },

    lastView: {
        marginHorizontal: 20
    }
})