import React, {useState} from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Modal, KeyboardAvoidingView, Platform } from 'react-native'
import Forminput from '../../components/Forminput'

const isValidEmail = (value) => {
    const regex = /^(([^<>()[\]\.,;:\s@\']+(\.[^<>()[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})$/i;
    return regex.test(value)
}

export default function RegisterScreen({navigation}) {

    const [userInfo, setUserInfo] = useState({
        email: undefined,
        userName: undefined,
        password: undefined,
        confirmPassword: undefined
    })

    const {email, userName, password, confirmPassword} = userInfo

    const [errorEmail, setErrorEmail] = useState(undefined)
    const [errorUserName, setErrorUserName] = useState(undefined)
    const [errorPassword, setErrorPassword] = useState(undefined)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(undefined)

    const [modalVisible, setModalVisible] = useState(false)

    const onChangeTextInput = (value, fieldName, setError) => {
        setUserInfo({...userInfo, [fieldName] : value})

        switch(fieldName){

            case 'email':
                if(value == '') 
                    setError('Required field !')
                else 
                    !isValidEmail(value) ? setError('Invalid email !') : setError('')  
                break

            case 'userName':
                value == '' ? setError('Required Field') : setError('')
                break

            case 'password':
                value == '' ? setError('Required Field') : setError('')
                break

            case 'confirmPassword':
                value !== password ? setError('Must be same with password') : setError('')
                break

            default:
                setError('')
                break
        }
    }

    const onRegister = () => {
        email == undefined ? setErrorEmail('Required Field !') : null
        userName == undefined ? setErrorUserName('Required Field !') : null
        password == undefined ? setErrorPassword('Required Field !') : null
        confirmPassword == undefined ? setErrorConfirmPassword('Required Field !') : null

        if(errorUserName == '' && errorPassword == '' && errorConfirmPassword == '' && errorEmail == ''){
            setModalVisible(true)
        }
    }

    const onModalButtonPress = () => {
        setModalVisible(false)
        navigation.navigate('LoginScreen')
    }

    return (
        <View style = {styles.mainContainer}>

            <Modal
                animationType = "slide"
                transparent = {true}
                visible = {modalVisible}
            >
                <View style = {styles.modalContainer}>
                    <View style = {styles.modalView}>
                        
                        <View style = {styles.modalTextView}>
                            <Text style = {styles.modalText}>Successfully Registered!</Text>
                        </View>

                        <TouchableOpacity
                            style = {styles.modalButton}
                            onPress = {() => onModalButtonPress()}
                        >
                        <Text style = {styles.modalButtonTextStyle}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style = {styles.container}>

                <Text style = {styles.registerText}>Register</Text>

                <Forminput
                    placeholder = 'Email : example123@gmai.com'
                    keyboardType = 'email-address'
                    autoCapitalize = 'none'
                    onChangeText = {(value) => onChangeTextInput(value, 'email', setErrorEmail)}
                    errorName = {errorEmail}
                />

                <Forminput
                    placeholder = 'Enter user name'
                    onChangeText = {(value) => onChangeTextInput(value, 'userName', setErrorUserName)}
                    errorName = {errorUserName}
                />

                <Forminput
                    placeholder = 'Create password'
                    onChangeText = {(value) => onChangeTextInput(value, 'password', setErrorPassword)}
                    secureTextEntry = {true}
                    errorName = {errorPassword}
                /> 

                <Forminput
                    placeholder = 'Confirm password'
                    onChangeText = {(value) => onChangeTextInput(value, 'confirmPassword', setErrorConfirmPassword)}
                    secureTextEntry = {true}
                    errorName = {errorConfirmPassword}
                /> 

                <View style = {styles.button}>
                    <Button
                        title = 'Register'
                        onPress = {onRegister}
                    />
                </View>

            </KeyboardAvoidingView>

            <TouchableOpacity onPress = {() => navigation.navigate('LoginScreen')} style = {styles.endText}>
                <Text style = {styles.lastText}>Already have an account? <Text style = {styles.lastBoldText}>Log in.</Text></Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center'
    },

    container:{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
    },

    registerText: {
        textAlign: 'center',
        marginBottom: '7%',
        fontSize: 35,
        fontWeight: 'bold'
    },

    button: {
        marginVertical: '5%',
    },

    lastText: {
        color: 'black',
        textAlign: 'center',
    },

    lastBoldText:{
        fontWeight: 'bold',
        color: '#050052'
    },

    endText: {
        height: '7%',
        borderTopWidth: 1,
        justifyContent: 'center'
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

    modalButtonTextStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

    modalText: {
        textAlign: "center"
    }
})