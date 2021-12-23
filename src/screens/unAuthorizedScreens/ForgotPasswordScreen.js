import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Modal } from 'react-native'
import Forminput from '../../components/Forminput'

const isValidEmail = (value) => {
    const regex = /^(([^<>()[\]\.,;:\s@\']+(\.[^<>()[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})$/i;
    return regex.test(value)
}

export default function LoginScreen({navigation}) {

    const [userInfo, setUserInfo] = useState({
        email: undefined,
        otp: undefined,
        password: undefined,
        confirmPassword: undefined
    })

    const {email, otp, password, confirmPassword} = userInfo

    const [OTPText, setOTPText] = useState('Send OTP on email')
    const [seconds, setSeconds ] =  useState(10);
    const [start, setStart] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const [isEditable, setIsEditable] = useState(false)

    const [errorEmail, setErrorEmail] = useState(undefined)
    const [errorOtp, setErrorOtp] = useState(undefined)
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

            case 'otp':
                value == '' ? setError('Required Field !') : setError('')
                break

            case 'password':
                value == '' ? setError('Required Field !') : setError('')
                break

            case 'confirmPassword':
                value !== password ? setError('Must be same with password !') : setError('')
                break

            default:
                setError('')
                break
        }
    }

    const onSave = () => {
        otp == undefined ? setErrorOtp('Required Field') : null
        password == undefined ? setErrorPassword('Required Field') : null
        confirmPassword == undefined ? setErrorConfirmPassword('Required Field') : null

        if(errorOtp == '' && errorPassword == '' && errorConfirmPassword == ''){
            setModalVisible(true)
        }
    }

    const onModalButtonPress = () => {
        setModalVisible(false)
        navigation.navigate('LoginScreen')
    }

    const onOTP = () => {
        email == undefined ? setErrorEmail('Required Field') : null
        if(errorEmail == ''){
            setStart(true)
            alert('OTP successfully sent on your mail')
            setIsDisabled(false)
            setIsEditable(true)
        }
        
    }
    useEffect(()=>{
        if(start){
            let myInterval = setInterval(() => {
                (seconds !== 0) ? setSeconds(seconds - 1) : null
                setOTPText(`Resend after ${seconds}s`)   
                if(seconds == 0){
                    setOTPText(`Resend`) 
                    setStart(false)
                    setSeconds(10)  
                }       
            }, 1000)
            return () => {
                clearInterval(myInterval);
            }
        }
    })

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
                            <Text style = {styles.modalText}>Successfully Created New Password!</Text>
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

            <View style = {styles.container}>
                <Text style = {styles.headerText}>Forgot Password</Text>

                <Forminput
                    label = 'Email'
                    placeholder = 'example123@gmai.com'
                    keyboardType = 'email-address'
                    autoCapitalize = 'none'
                    onChangeText = {(value) => onChangeTextInput(value, 'email', setErrorEmail)}
                    errorName = {errorEmail}
                />
                <TouchableOpacity onPress = {onOTP}>
                    <Text style = {styles.otpText}>{OTPText}</Text>
                </TouchableOpacity>
                
                <Forminput
                    placeholder = 'Enter 4 digit OTP'
                    keyboardType = 'numeric'
                    editable = {isEditable}
                    onChangeText = {(value) => onChangeTextInput(value, 'otp', setErrorOtp)}
                    errorName = {errorOtp}
                />

                <Forminput
                    placeholder = 'CEnter new password'
                    editable = {isEditable}
                    onChangeText = {(value) => onChangeTextInput(value, 'password', setErrorPassword)}
                    secureTextEntry = {true}
                    errorName = {errorPassword}
                /> 

                <Forminput
                    placeholder = 'Confirm password'
                    editable = {isEditable}
                    onChangeText = {(value) => onChangeTextInput(value, 'confirmPassword', setErrorConfirmPassword)}
                    secureTextEntry = {true}
                    errorName = {errorConfirmPassword}
                /> 

                <View style = {styles.button}>
                    <Button
                        title = 'Save'
                        onPress = {onSave}
                        disabled = {isDisabled}
                    />
                </View>

            </View>
            
            <TouchableOpacity style = {styles.endText} onPress = {() => navigation.navigate('LoginScreen')}>
                <Text style = {styles.lastText}>Back to <Text style = {styles.lastBoldText}>Log in.</Text></Text>
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

    headerText: {
        textAlign: 'center',
        marginBottom: '7%',
        fontSize: 35,
        fontWeight: 'bold'
    },

    otpText: {
        textAlign: 'right',
        color: 'blue'
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