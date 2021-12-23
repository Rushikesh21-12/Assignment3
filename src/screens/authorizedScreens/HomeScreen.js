import React, {useState} from 'react'
import { View, Text, Button, Dimensions, StyleSheet, FlatList } from 'react-native'

import Carousel from 'react-native-snap-carousel';

const ITEM_WIDTH = Dimensions.get('window').width - 20

export default function HomeScreen() {

    const isCarousel = React.useRef(null)

    const [activeIndex, setActiveIndex] = useState(0)
    const carouselItems = [
        { title:"Item 1", text: "Text 1" },
        { title:"Item 2", text: "Text 2" }
    ]

    const FetchItem = ({item,  index}) => {
        return (
            <View style={styles.carouselItem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.text}</Text>
            </View>
        )
    }

    return (
        <View>
            <View style = {styles.carousalContainer}>
                <Carousel
                    layout = {"default"}
                    ref = {isCarousel}
                    data = {carouselItems}
                    sliderWidth = {300}
                    itemWidth = {ITEM_WIDTH}
                    renderItem = {({item}) => <FetchItem item = {item}/>}
                    onSnapToItem = { index => setActiveIndex(index) } 
                />                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    carousalContainer: { 
        flexDirection:'row', 
        justifyContent: 'center', 
        padding: 10,
        marginBottom: 100
    },

    carouselItem: {
        backgroundColor:'rebeccapurple',
        borderRadius: 5,
        height: 250,
        width: '100%',
        padding: 50
    },

    title: {
        fontSize: 30
    }
})