import React, { useState, useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import Forminput from '../../components/Forminput'

import { AuthContext } from '../../context/context'

export default function LoginScreen({navigation}) {

    const isFocused = useIsFocused()

    useEffect(() => {
        setErrorUserName(undefined)
        setErrorPassword(undefined)
    }, [isFocused])

    const {signIn} = useContext(AuthContext)

    const [userInfo, setUserInfo] = useState({
        userName: undefined,
        password: undefined
    })

    const {userName, password} = userInfo

    const [errorUserName, setErrorUserName] = useState(undefined)
    const [errorPassword, setErrorPassword] = useState(undefined)

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
        userName == undefined ? setErrorUserName('Required Field') : null
        password == undefined ? setErrorPassword('Required Field') : null

        if(errorUserName == '' && errorPassword == ''){
            signIn(userName, password)
        }
    }


    return (
        <View style = {styles.mainContainer}>

            <View style = {styles.container}>
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
                    secureTextEntry = {true}
                    errorName = {errorPassword}
                /> 

                <View style = {styles.button}>
                    <Button
                        title = 'Login'
                        onPress = {onSignin}
                    />
                </View>

                <TouchableOpacity onPress = {() => navigation.navigate('ForgotPasswordScreen')}>
                    <Text style = {styles.lastText}>Forgot your login details? <Text style = {styles.lastBoldText}>Get help logging in.</Text></Text>
                </TouchableOpacity>
            </View>
            

            <TouchableOpacity onPress = {() => navigation.navigate('RegisterScreen')} style = {styles.endText}>
                <Text style = {styles.lastText}>Dont have an account? <Text style = {styles.lastBoldText}>Sign Up.</Text></Text>
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

    loginText: {
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
    }
})