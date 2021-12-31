import React, {useMemo, useReducer, useEffect} from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import UnAuthorizedScreens from './src/navigations/UnAuthoRizedScreens';
import AuthorizedScreens from './src/navigations/AuthorizedScreens';

import { AuthContext } from './src/context/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const initialLoginState = {
    isLoading: true,
    userToken: null,
    username: null
  }

  const loginReducer = (state, action) => {
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return {...state, userToken: action.token, isLoading: false}

      case 'LOGIN':
        return {...state, userToken: action.token, username: action.id, isLoading: false}

      case 'LOGOUT':
        return {...state, userToken: null, username: null, isLoading: false}

      case 'REGISTER':
        return {...state, userToken: action.token, username: action.id, isLoading: false}
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const authContext = useMemo(() => ({
    signIn: async(userName, password) => {
      let userToken
      userToken = null
      if(userName == 'user' && password == 'pass'){
        try{
          userToken = 'abc'
          await AsyncStorage.setItem('userToken', userToken)
        } catch(e){
          console.log(e)
        }
      }
      dispatch({type: 'LOGIN', id: userName, token: userToken})
    },

    signOut: async() => {
      try{
        await AsyncStorage.removeItem('userToken')
      } catch(e){
        console.log(e)
      }
      dispatch({type: 'LOGOUT'})
    },

    signUp: () => {
    }
  }), [])

  useEffect(() => {
    setTimeout(async() => {
      let userToken
      userToken = null
      try{
        userToken = await AsyncStorage.getItem('userToken')
      } catch(e){
        console.log(e)
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken})
    }, 1000);
  }, [])

  if(loginState.isLoading){
    return(
      <View style = {styles.spinner}>
        <ActivityIndicator size = 'large'/>
      </View>
    )
  }

  return (
    <AuthContext.Provider value = {authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? <AuthorizedScreens/> : <UnAuthorizedScreens/>}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1, 
    justifyContent:'center', 
    alignItems:'center'
  }
})