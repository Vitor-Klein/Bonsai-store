import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomePage from './HomePage'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
     <AppStack.Navigator 
        headerMode="none" 
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5'
          }
        }}
      >
        <AppStack.Screen name='Home' component={HomePage} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes