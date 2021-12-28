import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import ProductItem from '../../components/ProductItem'


export default function ProductScreen({navigation}) {

    const cardData = [
        { src: 'https://picsum.photos/200/300?random=1', title: 'Product 1', price: 56},
        { src: 'https://picsum.photos/200/300?random=2', title: 'Product 2', price: 78},
        { src: 'https://picsum.photos/200/300?random=3', title: 'Product 3', price: 87},
        { src: 'https://picsum.photos/200/300?random=4', title: 'Product 4', price: 52},
        { src: 'https://picsum.photos/200/300?random=5', title: 'Product 5', price: 98},
        { src: 'https://picsum.photos/200/300?random=6', title: 'Product 6', price: 12},
        { src: 'https://picsum.photos/200/300?random=7', title: 'Product 7', price: 78},
        { src: 'https://picsum.photos/200/300?random=8', title: 'Product 8', price: 44},
        { src: 'https://picsum.photos/200/300?random=9', title: 'Product 9', price: 68},
        { src: 'https://picsum.photos/200/300?random=10', title: 'Product 10', price: 89},
        { src: 'https://picsum.photos/200/300?random=11', title: 'Product 11', price: 53},
        { src: 'https://picsum.photos/200/300?random=12', title: 'Product 12', price: 24},
        { src: 'https://picsum.photos/200/300?random=13', title: 'Product 13', price: 35},
        { src: 'https://picsum.photos/200/300?random=14', title: 'Product 14', price: 47},
        { src: 'https://picsum.photos/200/300?random=15', title: 'Product 15', price: 74},
        { src: 'https://picsum.photos/200/300?random=16', title: 'Product 16', price: 74},
        { src: 'https://picsum.photos/200/300?random=17', title: 'Product 17', price: 64},
        { src: 'https://picsum.photos/200/300?random=18', title: 'Product 18', price: 79},
        { src: 'https://picsum.photos/200/300?random=19', title: 'Product 19', price: 39},
        { src: 'https://picsum.photos/200/300?random=20', title: 'Product 20', price: 95}
    ]

    const onAddToCart = (src, title, price) => {
        navigation.navigate('CartScreen', {
            src: src,
            title: title,
            price: price
        })
    }
    return (
        <View style = {styles.container}>
            <FlatList
                data = {cardData}
                renderItem = {({item}) => (
                    <ProductItem   
                        src = {item.src}   
                        title = {item.title} 
                        price = {item.price}
                        onAddItem = {onAddToCart}
                    />
                )}
                numColumns = {2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})