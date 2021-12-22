import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import UnAuthorizedScreens from './src/navigations/UnAuthoRizedScreens';
import AuthorizedScreens from './src/navigations/AuthorizedScreens';



export default function App() {
  return (
    <NavigationContainer>
      <UnAuthorizedScreens/>
    </NavigationContainer>
  )
}
