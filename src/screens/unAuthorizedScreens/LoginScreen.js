import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Modal, TouchableOpacity } from 'react-native'
import Forminput from '../../components/Forminput'

export default function LoginScreen({navigation}) {

    const [userInfo, setUserInfo] = useState({
        userName: undefined,
        password: undefined
    })

    const {userName, password} = userInfo

    const [errorUserName, setErrorUserName] = useState(undefined)
    const [errorPassword, setErrorPassword] = useState(undefined)

    const [modalVisible, setModalVisible] = useState(false)

    const onChangeTextInput = (value, fieldName, setError) => {
        setUserInfo({...userInfo, [fieldName] : value})

        switch(fieldName){
            case 'userName':
                value == '' ? setError('Required Field') : setError('')
                break

            case 'password':
                value == '' ? setError('Required Field') : setError('')
                break

            default:
                setError('')
                break
        }
    }

    const onSignin = () => {
        userName == undefined ? setErrorUserName('Required Field') : setErrorUserName('')
        password == undefined ? setErrorPassword('Required Field') : setErrorPassword('')

        if(errorUserName == '' && errorPassword == ''){
            setModalVisible(true)
        }
    }

    const onModalButtonPress = () => {
        setModalVisible(false)
        alert('modal button pressed')
    }

    return (
        <View style = {styles.container}>

            <Modal
                animationType = "slide"
                transparent = {true}
                visible = {modalVisible}
            >
                <View style = {styles.modalContainer}>
                    <View style = {styles.modalView}>
                        
                        <View style = {styles.modalTextView}>
                            <Text style = {styles.modalText}>Successfully Submitted!</Text>
                        </View>

                        <TouchableOpacity
                            style = {styles.modalButton}
                            onPress = {() => onModalButtonPress()}
                        >
                        <Text style = {styles.modalButtonStyle}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Text style = {styles.loginText}>Login</Text>

            <Forminput
                label = 'User Name'
                placeholder = 'Enter user name'
                onChangeText = {(value) => onChangeTextInput(value, 'userName', setErrorUserName)}
                errorName = {errorUserName}
            />

            <Forminput
                label = 'Password'
                placeholder = 'Enter password'
                onChangeText = {(value) => onChangeTextInput(value, 'password', setErrorPassword)}
                errorName = {errorPassword}
            /> 

            <View style = {styles.button}>
                <Button
                    title = 'SignIn'
                    onPress = {onSignin}
                />
            </View>

            <TouchableOpacity onPress = {() => navigation.navigate('ForgotPasswordScreen')}>
                <Text style = {styles.lastText}>Forgot Password? Get help logging in.</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.navigate('RegisterScreen')} style = {styles.endText}>
                <Text style = {styles.lastText}>Dont have an account? Sign Up.</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        justifyContent: 'center'
    },

    loginText: {
        textAlign: 'center',
        marginBottom: '7%',
        fontSize: 35
    },

    button: {
        marginVertical: '5%'
    },

    lastText: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 16
    },

    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    modalTextView:{
        marginVertical: '10%'
    },

    modalView: {
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        elevation: 5
    },

    modalButton: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        width: 250,
        backgroundColor: "#2196F3",
    },

    modalButtonStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

    modalText: {
        textAlign: "center"
    }
})