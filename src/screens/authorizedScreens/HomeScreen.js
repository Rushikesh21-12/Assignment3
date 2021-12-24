import React, {useState} from 'react'
import { View, Dimensions, StyleSheet, FlatList, Image } from 'react-native'

import Carousel from 'react-native-snap-carousel'
import CardView from '../../components/CardView'
// import {FlatListSlider} from 'react-native-flatlist-slider';

const ITEM_WIDTH = Dimensions.get('window').width

export default function HomeScreen() {

    const isCarousel = React.useRef(null)

    const [activeIndex, setActiveIndex] = useState(0)

    const carouselItems = [
        { src:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' },
        { src:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80'}
    ]

    const cardData = [
        { src: 'https://picsum.photos/200/300?random=1', title: 'Image 1'},
        { src: 'https://picsum.photos/200/300?random=2', title: 'Image 3'},
        { src: 'https://picsum.photos/200/300?random=3', title: 'Image 2'},
        { src: 'https://picsum.photos/200/300?random=4', title: 'Image 4'},
        { src: 'https://picsum.photos/200/300?random=5', title: 'Image 5'},
        { src: 'https://picsum.photos/200/300?random=6', title: 'Image 6'},
        { src: 'https://picsum.photos/200/300?random=7', title: 'Image 7'},
        { src: 'https://picsum.photos/200/300?random=8', title: 'Image 8'},
        { src: 'https://picsum.photos/200/300?random=9', title: 'Image 9'},
        { src: 'https://picsum.photos/200/300?random=10', title: 'Image 10'},
        { src: 'https://picsum.photos/200/300?random=11', title: 'Image 11'},
        { src: 'https://picsum.photos/200/300?random=12', title: 'Image 12'},
        { src: 'https://picsum.photos/200/300?random=13', title: 'Image 13'},
        { src: 'https://picsum.photos/200/300?random=14', title: 'Image 14'},
        { src: 'https://picsum.photos/200/300?random=15', title: 'Image 15'},
        { src: 'https://picsum.photos/200/300?random=16', title: 'Image 16'},
        { src: 'https://picsum.photos/200/300?random=17', title: 'Image 17'},
        { src: 'https://picsum.photos/200/300?random=18', title: 'Image 18'},
        { src: 'https://picsum.photos/200/300?random=19', title: 'Image 19'},
        { src: 'https://picsum.photos/200/300?random=20', title: 'Image 20'}

    ]
    const FetchItem = ({item,  index}) => {
        return ( 
            <View style={styles.sliderContainer}>
                <Image source = {{uri: item.src}} style = {styles.image}/>
            </View>
        )
    }

    // const images = [
    //     {
    //      image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    //      desc: 'Silent Waters in the mountains in midst of Himilayas',
    //     },
    //    {
    //      image: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    //      desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    //    }
    // ]

    return (
        <View style = {{flex: 1}}>
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
            
            {/* <FlatListSlider
                data = {images}
            />  */}

            <FlatList
                
                data = {cardData}
                renderItem = {({item}) => <CardView src = {item.src} title = {item.title}/>}
                numColumns = {3}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    sliderContainer: {
        margin:  10
    },

    carousalContainer: { 
        flexDirection:'row', 
    },

    image:{
        width: '100%',
        height: 250
    }
})