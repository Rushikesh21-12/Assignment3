import React, {useLayoutEffect} from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView,Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { Actionsheet, useDisclose, Box, NativeBaseProvider} from "native-base"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Forminput from '../../../components/Forminput';

export default function EditProfileScreen({navigation, route}) {

    const {firstName, lastName, gender, age, bio, image} = route.params
    const { isOpen, onOpen, onClose } = useDisclose();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress = {onSave}>
                    <MaterialIcons name = "done" size={24} color="black" />
                </TouchableOpacity>
                
            ),
        });
    })

    const onSave = () => {
        navigation.navigate({
            name: 'ProfileScreen',
            params: {
                firstName: firstName, 
                lastName: lastName,
                gender: gender,
                age: age,
                bio: bio,
                image: image
            },
            merge: true
        })
    }

    const takePhotoFromCamera = () => {
        {onClose()}
        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
        }).then(image => {
            navigation.setParams({image :image.path})  
        });          
    }

    const choosePhotoFromGallery = () => {
        {onClose()}
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
        }).then(image => {
            navigation.setParams({image :image.path})
        });
    }

    return (
        <NativeBaseProvider>
        <KeyboardAwareScrollView showsVerticalScrollIndicator = {false} style = {styles.container}>

            <View style = {styles.imageView}>

                <Image source = {{uri: image}} style = {styles.profile}/>

                <TouchableOpacity onPress = {onOpen}>
                    <Text style = {styles.profileChangeText}>Change profile photo</Text>
                </TouchableOpacity>

                <Actionsheet isOpen = {isOpen} onClose = {onClose}>
                    <Actionsheet.Content>
                        <Box><Text>Select any option</Text></Box>
                        <Actionsheet.Item onPress = {takePhotoFromCamera}>Open Camera</Actionsheet.Item>
                        <Actionsheet.Item onPress = {choosePhotoFromGallery}>Choose from gallery</Actionsheet.Item>
                        <Actionsheet.Item onPress = {onClose}>Cancel</Actionsheet.Item>
                    </Actionsheet.Content>
                </Actionsheet>

            </View>

            <Forminput
                defaultValue = {firstName == 'Firstname' ? '' : firstName}
                placeholder = 'Enter First Name'
                onChangeText = {value => navigation.setParams({firstName: value})}
            />

            <Forminput
                defaultValue = {lastName == 'Lastname' ? '' : lastName}
                placeholder = 'Enter Last Name'
                onChangeText = {value => navigation.setParams({lastName: value})}
            />

            <View style = {styles.genderView}>

                <Text style = {styles.defaultText}>Select Gender : </Text>

                <RadioButton.Group 
                    value = {gender}
                    onValueChange = {value => navigation.setParams({gender: value})}
                >
                    <View style = {styles.radioButtons}>
                        <RadioButton.Item label = 'Male' value = 'Male' />
                        <RadioButton.Item label = 'Female' value = 'Female' />
                    </View>
                </RadioButton.Group>
                
            </View>

            <Forminput
                label = 'Age'
                defaultValue = {age == 'Age' ? '' : age}
                placeholder = 'Enter Age'
                maxLength = {2}
                keyboardType = 'numeric'
                onChangeText = {value => navigation.setParams({age: value})}
            />

            <Forminput
                label = 'Bio'
                defaultValue = {bio == 'Add your bio...' ? '' : bio}
                placeholder = 'Add your bio...'
                onChangeText = {value => navigation.setParams({bio: value})}
                multiline = {true}
            />

        </KeyboardAwareScrollView>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30
    },

    imageView:{
        alignSelf: 'center',
        marginVertical: 20
    },

    profile: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        alignSelf: 'center'
    },

    profileChangeText:{
        color: 'dodgerblue',
        fontSize: 16
    },

    genderView: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    radioButtons: {
        flexDirection: 'row',
    },

    defaultText: {
        fontSize: 16
    }
})
