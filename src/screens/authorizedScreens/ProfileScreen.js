import React, {useEffect, useState} from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ProfileScreen({navigation, route}) {

    const [image, setImage] = useState('https://i.postimg.cc/TYNx4qkz/default-profile.png')
    const [firstName, setFirstName] = useState(undefined)
    const [lastName, setLastName] = useState(undefined)
    const [gender, setGender] = useState(undefined)
    const [age, setAge] = useState(undefined)
    const [bio, setBio] = useState('Add your bio...')

    useEffect(() => {

        route.params?.firstName ? setFirstName(route.params?.firstName) : null
        route.params?.lastName ? setLastName(route.params?.lastName) : null
        route.params?.gender ? setGender(route.params?.gender) : null
        route.params?.age ? setAge(route.params?.age) : null
        route.params?.bio  ? setBio(route.params?.bio) : null
        route.params?.image ? setImage(route.params?.image) : null
        
    }, [route.params?.firstName, route.params?.lastName, route.params?.gender,
        route.params?.age, route.params?.bio, route.params?.image]
    )

    const onEdit = () => {
        navigation.navigate('EditProfileScreen', {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
            bio: bio,
            image: image
        })
    }

    return (
        <View style = {styles.container}>

            <View style = {styles.editButton}>
                <TouchableOpacity onPress = {onEdit}>
                    <AntDesign name="edit" size={24} color="black" />
                </TouchableOpacity>
                
            </View>

            <View style = {styles.topView}>
                
                <Image source = {{uri : image}} style = {styles.profile}/>

                <View style = {styles.userInfoView}>
                    {firstName == undefined && lastName == undefined 
                        ? <Text>Edit your profile to show details</Text>
                        : <Text style = {styles.nameStyle}>{firstName} {lastName}</Text>
                    }

                    {gender == undefined ? null : <Text style = {styles.genderAndAge}>Gender : {gender} </Text>}
                    {age == undefined ? null :  <Text style = {styles.genderAndAge}>Age : {age}</Text>}
                </View>
                
            </View>

            <View style = {styles.bioView}>
                <Text style = {styles.bioTitle}>About</Text>
                <Text style = {styles.bio}>{bio}</Text>
            </View>
     
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30
    },

    editButton:{
        alignSelf: 'flex-end',
        marginTop: 10,
        left: 20
    },

    topView:{
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },

    profile: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
    },

    userInfoView:{
        marginLeft: 20
    },

    nameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10
    },

    genderAndAge:{
        fontSize: 14
    },  

    bioView:{
        marginVertical: 10
    },

    bioTitle:{
        fontSize: 20,
        fontWeight: 'bold'
    },

    bio:{
        marginTop: 5,
        fontSize: 15,
        textAlign: 'justify'
    }
})
